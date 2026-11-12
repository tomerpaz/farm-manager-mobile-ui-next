import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { Alert, Box, Button, TextField, Typography } from '@mui/material';

import { selectLang } from '../app/appSlice';
import { useForgotPasswordMutation } from './authApiSlice';
import AuthPage from './AuthPage';

const buttonSx = { textTransform: 'none', fontWeight: 700 };

// Asks for a reset link by username or email. The server answers the same way whether or
// not the account exists, so the confirmation never says whether an email was really sent.
const ForgotPassword = () => {
    const text = useSelector(selectLang);
    const navigate = useNavigate();
    const location = useLocation();
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
    const [sent, setSent] = useState(false);
    const [formError, setFormError] = useState(null);
    // The Login page passes on what was typed in its username box.
    const { control, handleSubmit } = useForm({ defaultValues: { login: location.state?.login ?? '' } });
    const login = useWatch({ control, name: 'login' });

    const backToLogin = () => navigate('/login', { replace: true });

    const onSubmit = async ({ login }) => {
        setFormError(null);
        try {
            await forgotPassword({ login: login.trim() }).unwrap();
            setSent(true);
        } catch {
            setFormError(text.resetRequestFailed || 'Could not send the request. Please try again.');
        }
    };

    if (sent) {
        return (
            <AuthPage title={text.resetPassword || 'Reset Password'}>
                <Alert severity="success">
                    {text.resetLinkSent || "If an account matches what you entered, we've sent a link to its email address. The link is valid for 30 minutes and can be used once. Check your spam folder if it doesn't arrive."}
                </Alert>
                <Button variant="contained" color="success" onClick={backToLogin} sx={buttonSx}>
                    {text.backToLogin || 'Back to Sign In'}
                </Button>
            </AuthPage>
        );
    }

    return (
        <AuthPage title={text.resetPassword || 'Reset Password'}>
            <Typography variant="body2" color="text.secondary">
                {text.resetPasswordIntro || "Enter your username or your account's email address, and we'll email you a link to reset your password."}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Controller
                    name="login"
                    control={control}
                    render={({ field: { ref, ...inputProps } }) => (
                        <TextField
                            {...inputProps}
                            inputRef={ref}
                            label={text.usernameOrEmail || 'Username or Email'}
                            autoComplete="username"
                            autoFocus
                            fullWidth
                            required
                        />
                    )}
                />
                {formError && <Alert severity="error" onClose={() => setFormError(null)}>{formError}</Alert>}
                <Button type="submit" variant="contained" color="success" disabled={!login?.trim() || isLoading} sx={buttonSx}>
                    {text.sendResetLink || 'Send Reset Link'}
                </Button>
                <Button onClick={backToLogin} sx={buttonSx}>
                    {text.backToLogin || 'Back to Sign In'}
                </Button>
            </Box>
        </AuthPage>
    );
};

export default ForgotPassword;
