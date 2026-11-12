import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router';
import { useForm, useWatch } from 'react-hook-form';
import { Alert, Box, Button, TextField } from '@mui/material';

import { selectLang, setSnackbar } from '../app/appSlice';
import { useCheckResetTokenQuery, useResetPasswordMutation } from './authApiSlice';
import { HiddenUsername, NewPasswordFields, passwordRulesText } from './PasswordFields';
import AuthPage from './AuthPage';
import Loading from '../../components/Loading';

const buttonSx = { textTransform: 'none', fontWeight: 700 };

// Opened from the emailed link: #/reset-password?token=...
// The token is checked first, so an expired link says so before a password is typed.
const ResetPassword = () => {
    const text = useSelector(selectLang);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token') || '';

    const { data: check, isLoading: isChecking, isError: checkFailed } = useCheckResetTokenQuery(token, { skip: !token });
    const [resetPassword, { isLoading }] = useResetPasswordMutation();
    // Set when the server rejects the token on save (it expired or was used meanwhile).
    const [tokenRejected, setTokenRejected] = useState(false);
    const [formError, setFormError] = useState(null);

    const { control, handleSubmit, setError, setValue, getValues } = useForm({ defaultValues: { newPassword: '', confirmPassword: '' } });
    const [newPassword, confirmPassword] = useWatch({ control, name: ['newPassword', 'confirmPassword'] });
    const canSubmit = !!newPassword && newPassword === confirmPassword;

    const title = text.resetPassword || 'Reset Password';

    const onSubmit = async ({ newPassword }) => {
        setFormError(null);
        try {
            await resetPassword({ token, newPassword }).unwrap();
            dispatch(setSnackbar({ msg: text.passwordResetDone || 'Password changed. Sign in with your new password.', severity: 'success' }));
            navigate('/login', { replace: true });
        } catch (err) {
            const errors = err?.data?.errors || {};
            if (errors.token) {
                setTokenRejected(true);
            } else if (errors.newPassword) {
                setError('newPassword', { message: passwordRulesText(text) }, { shouldFocus: true });
            } else {
                setFormError(text.resetFailed || 'Could not reset the password. Please try again.');
            }
        }
    };

    if (isChecking) {
        return <AuthPage title={title}><Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}><Loading /></Box></AuthPage>;
    }

    if (checkFailed) {
        return (
            <AuthPage title={title}>
                <Alert severity="error">{text.resetFailed || 'Could not reset the password. Please try again.'}</Alert>
                <Button variant="contained" color="success" onClick={() => window.location.reload()} sx={buttonSx}>
                    {text.tryAgain || 'Try Again'}
                </Button>
            </AuthPage>
        );
    }

    if (!token || !check?.valid || tokenRejected) {
        return (
            <AuthPage title={title}>
                <Alert severity="warning">
                    {text.resetLinkInvalid || 'This link has expired or was already used. Request a new one.'}
                </Alert>
                <Button variant="contained" color="success" onClick={() => navigate('/forgot-password', { replace: true })} sx={buttonSx}>
                    {text.requestNewLink || 'Request a New Link'}
                </Button>
            </AuthPage>
        );
    }

    return (
        <AuthPage title={title}>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <HiddenUsername username={check.username} />
                <TextField label={text.username || 'Username'} value={check.username} fullWidth disabled />
                <NewPasswordFields control={control} text={text} setValue={setValue} getValues={getValues} />
                {formError && <Alert severity="error" onClose={() => setFormError(null)}>{formError}</Alert>}
                <Button type="submit" variant="contained" color="success" disabled={!canSubmit || isLoading} sx={buttonSx}>
                    {text.setNewPassword || 'Set New Password'}
                </Button>
            </Box>
        </AuthPage>
    );
};

export default ResetPassword;
