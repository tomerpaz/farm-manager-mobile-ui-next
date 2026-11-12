import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { Alert, Box, Button, Dialog, DialogContent, Divider, TextField, Typography } from '@mui/material';

import { selectLang, setSnackbar } from '../../features/app/appSlice';
import { useChangePasswordMutation, useGetProfileQuery, useUpdateProfileMutation } from '../../features/auth/authApiSlice';
import { HiddenUsername, NewPasswordFields, PasswordField, passwordRulesText } from '../../features/auth/PasswordFields';
import Loading from '../../components/Loading';
import DialogAppBar from '../dialog/DialogAppBar';
import { isMobile } from '../FarmUtil';
import { Transition } from '../Util';

// The same checks the server makes (UserServiceImpl), so most mistakes show
// before saving. The server still decides: its errors land on the same fields.
const FIELD_MAX = 100;
const PHONE_PATTERN = /^\+?[0-9 ()-]{7,20}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The server's error codes (Result.errors values) as messages.
const errorMessage = (code, text) => ({
    required: text.fieldRequired || 'This field is required',
    tooLong: (text.tooLong || 'Too long (max {max} characters)').replace('{max}', FIELD_MAX),
    invalidPhone: text.invalidPhone || 'Invalid phone number',
    invalidEmail: text.invalidEmail || 'Invalid email address',
    invalidPassword: text.wrongCurrentPassword || 'The current password is incorrect',
    invalidNewPassword: passwordRulesText(text),
    samePassword: text.samePassword || 'The new password must be different from the current one',
}[code] || code);

// Puts a rejected save's errors on their fields; returns false when there were none to show.
const showServerErrors = (err, setError, text) => {
    const errors = Object.entries(err?.data?.errors || {});
    errors.forEach(([field, code]) => setError(field, { message: errorMessage(code, text) }, { shouldFocus: true }));
    return errors.length > 0;
};

const sectionTitleSx = { fontWeight: 700, mb: 2 };
const formSx = { display: 'flex', flexDirection: 'column', gap: 2 };
const saveButtonSx = { alignSelf: 'flex-end', textTransform: 'none', fontWeight: 700, px: 4 };

const toFormValues = (profile) => ({
    firstName: profile?.firstName ?? '',
    lastName: profile?.lastName ?? '',
    phone: profile?.phone ?? '',
    email: profile?.email ?? '',
});

const ProfileForm = ({ profile, text }) => {
    const dispatch = useDispatch();
    const [updateProfile, { isLoading }] = useUpdateProfileMutation();
    const [formError, setFormError] = useState(null);
    const { control, handleSubmit, setError, reset, formState: { isDirty } } = useForm({ defaultValues: toFormValues(profile) });

    // A save refetches the profile; showing the saved values also makes the form clean again.
    useEffect(() => reset(toFormValues(profile)), [profile, reset]);

    const onSubmit = async (values) => {
        setFormError(null);
        try {
            await updateProfile(values).unwrap();
            dispatch(setSnackbar({ msg: text.profileSaved || 'Profile saved', severity: 'success' }));
        } catch (err) {
            if (!showServerErrors(err, setError, text)) {
                setFormError(text.profileSaveFailed || 'Could not save. Please try again.');
            }
        }
    };

    const maxLength = { value: FIELD_MAX, message: errorMessage('tooLong', text) };
    const field = (name, label, rules, props = {}) => (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { ref, ...inputProps }, fieldState: { error } }) => (
                <TextField {...inputProps} {...props} inputRef={ref} label={label} fullWidth error={!!error} helperText={error?.message} />
            )}
        />
    );

    return (
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={formSx}>
            <Typography variant="subtitle1" sx={sectionTitleSx}>{text.profile || 'Profile'}</Typography>
            {/* The username can't be changed - shown for reference only. */}
            <TextField label={text.username || 'Username'} value={profile?.username ?? ''} fullWidth disabled />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                {field('firstName', text.firstName || 'First Name', {
                    validate: (v) => !!v?.trim() || errorMessage('required', text),
                    maxLength,
                }, { required: true, autoComplete: 'given-name' })}
                {field('lastName', text.lastName || 'Last Name', { maxLength }, { autoComplete: 'family-name' })}
            </Box>
            {field('phone', text.phone || 'Phone', {
                validate: (v) => !v?.trim() || PHONE_PATTERN.test(v.trim()) || errorMessage('invalidPhone', text),
            }, { type: 'tel', autoComplete: 'tel' })}
            {field('email', text.email || 'Email', {
                validate: (v) => !v?.trim() || (EMAIL_PATTERN.test(v.trim()) && v.trim().length <= FIELD_MAX) || errorMessage('invalidEmail', text),
            }, { type: 'email', autoComplete: 'email' })}
            {formError && <Alert severity="error" onClose={() => setFormError(null)}>{formError}</Alert>}
            <Button type="submit" variant="contained" color="success" disabled={!isDirty || isLoading} sx={saveButtonSx}>
                {text.save || 'Save'}
            </Button>
        </Box>
    );
};

const EMPTY_PASSWORDS = { currentPassword: '', newPassword: '', confirmPassword: '' };

const PasswordForm = ({ username, text }) => {
    const dispatch = useDispatch();
    const [changePassword, { isLoading }] = useChangePasswordMutation();
    const [formError, setFormError] = useState(null);
    const { control, handleSubmit, setError, reset, getValues, setValue } = useForm({ defaultValues: EMPTY_PASSWORDS });
    const required = errorMessage('required', text);
    const [currentPassword, newPassword, confirmPassword] = useWatch({ control, name: ['currentPassword', 'newPassword', 'confirmPassword'] });
    // Nothing to send until all three are filled and the new password is confirmed.
    const canSubmit = !!currentPassword && !!newPassword && newPassword === confirmPassword;

    const onSubmit = async ({ currentPassword, newPassword }) => {
        setFormError(null);
        try {
            await changePassword({ currentPassword, newPassword }).unwrap();
            reset(EMPTY_PASSWORDS);
            dispatch(setSnackbar({ msg: text.passwordChanged || 'Password changed', severity: 'success' }));
        } catch (err) {
            if (!showServerErrors(err, setError, text)) {
                setFormError(text.passwordChangeFailed || 'Could not change the password. Please try again.');
            }
        }
    };

    return (
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={formSx}>
            <Typography variant="subtitle1" sx={sectionTitleSx}>{text.changePassword || 'Change Password'}</Typography>
            <HiddenUsername username={username} />
            <PasswordField
                control={control} text={text} name="currentPassword" autoComplete="current-password"
                label={text.currentPassword || 'Current Password'}
                rules={{ required }}
            />
            <NewPasswordFields
                control={control} text={text} setValue={setValue} getValues={getValues}
                extraRules={{ different: (v) => v !== getValues('currentPassword') || errorMessage('samePassword', text) }}
            />
            {formError && <Alert severity="error" onClose={() => setFormError(null)}>{formError}</Alert>}
            <Button type="submit" variant="contained" color="success" disabled={!canSubmit || isLoading} sx={saveButtonSx}>
                {text.changePassword || 'Change Password'}
            </Button>
        </Box>
    );
};

// The signed-in user's own details and password. Closing it unmounts both forms,
// so typed passwords never outlive the dialog.
const ProfileDialog = ({ open, onClose }) => {
    const text = useSelector(selectLang);
    const { data: profile, isLoading, isError } = useGetProfileQuery(undefined, { skip: !open });

    return (
        <Dialog
            fullScreen={isMobile()}
            fullWidth={!isMobile()}
            maxWidth="sm"
            open={open}
            onClose={onClose}
            disableRestoreFocus
            slots={{ transition: Transition }}
        >
            <DialogAppBar onClose={onClose} title={text.profile || 'Profile'} />
            <DialogContent sx={{ pt: 3 }}>
                {isLoading && <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}><Loading /></Box>}
                {isError && <Alert severity="error">{text.profileLoadFailed || 'Could not load your profile. Please try again.'}</Alert>}
                {profile && (
                    <>
                        <ProfileForm profile={profile} text={text} />
                        <Divider sx={{ my: 3 }} />
                        <PasswordForm username={profile.username} text={text} />
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ProfileDialog;
