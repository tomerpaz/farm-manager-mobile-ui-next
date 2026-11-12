import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Box, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import { AutoAwesome, Visibility, VisibilityOff } from '@mui/icons-material';

// Password inputs shared by the profile dialog's Change Password and the Reset Password page.

export const PASSWORD_MAX = 45;
// application.yml passwordRegex: 8+ letters and digits, at least one of each.
export const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const passwordRulesText = (text) =>
    text.passwordRules || 'At least 8 characters, letters and numbers only, with at least one letter and one number.';

// A random password the server accepts: letters and digits, at least one lowercase,
// uppercase and digit. Look-alike characters (0/O, 1/l/I) are left out so it can be read back.
const GENERATED_LENGTH = 16;
const LOWER = 'abcdefghijkmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const DIGITS = '23456789';
const ALL_CHARS = LOWER + UPPER + DIGITS;

// Unbiased index below n from the secure random source (rejection sampling).
const randomIndex = (n) => {
    const limit = Math.floor(256 / n) * n;
    const byte = new Uint8Array(1);
    do { crypto.getRandomValues(byte); } while (byte[0] >= limit);
    return byte[0] % n;
};

export const generatePassword = () => {
    const chars = Array.from({ length: GENERATED_LENGTH }, () => ALL_CHARS[randomIndex(ALL_CHARS.length)]);
    const password = chars.join('');
    return /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) ? password : generatePassword();
};

// visible/onToggleVisible are optional: pass them to control visibility from outside
// (New and Confirm share one, so a generated password shows in both).
export const PasswordField = ({ control, name, label, rules, autoComplete, helperText, text, htmlInput, visible: shownFromParent, onToggleVisible, extraAction }) => {
    const [shown, setShown] = useState(false);
    const visible = shownFromParent ?? shown;
    const toggleVisible = onToggleVisible ?? (() => setShown((v) => !v));
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field: { ref, ...inputProps }, fieldState: { error } }) => (
                <TextField
                    {...inputProps}
                    inputRef={ref}
                    label={label}
                    type={visible ? 'text' : 'password'}
                    autoComplete={autoComplete}
                    fullWidth
                    required
                    error={!!error}
                    helperText={error?.message || helperText}
                    slotProps={{
                        htmlInput,
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    {extraAction}
                                    <IconButton
                                        aria-label={visible ? (text.hidePassword || 'Hide password') : (text.showPassword || 'Show password')}
                                        onClick={toggleVisible}
                                        edge="end"
                                    >
                                        {visible ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            )}
        />
    );
};

const visuallyHiddenSx = {
    // '1px' as strings: in sx a bare 1 means 100%.
    position: 'absolute', width: '1px', height: '1px', p: 0, m: '-1px', border: 0,
    overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap',
};

// Lets password managers file the new password under this account. Hidden visually
// only: browsers skip inputs with the hidden attribute or display:none.
export const HiddenUsername = ({ username }) => (
    <Box
        component="input"
        type="text"
        name="username"
        autoComplete="username"
        defaultValue={username ?? ''}
        tabIndex={-1}
        aria-hidden="true"
        sx={visuallyHiddenSx}
    />
);

// New + Confirm, with a Generate button that fills both and shows them.
// Field names: newPassword, confirmPassword. extraRules adds checks to newPassword
// (the profile dialog uses it for "different from the current password").
export const NewPasswordFields = ({ control, text, setValue, getValues, extraRules }) => {
    const [shown, setShown] = useState(false);
    const required = text.fieldRequired || 'This field is required';
    const rulesText = passwordRulesText(text);
    const visibility = { visible: shown, onToggleVisible: () => setShown((v) => !v) };
    const generateLabel = text.generatePassword || 'Generate strong password';

    const handleGenerate = () => {
        const password = generatePassword();
        const opts = { shouldValidate: true, shouldDirty: true, shouldTouch: true };
        setValue('newPassword', password, opts);
        setValue('confirmPassword', password, opts);
        setShown(true);
    };

    return (
        <>
            <PasswordField
                control={control} text={text} name="newPassword" autoComplete="new-password"
                {...visibility}
                extraAction={
                    <Tooltip title={generateLabel}>
                        <IconButton aria-label={generateLabel} onClick={handleGenerate}>
                            <AutoAwesome />
                        </IconButton>
                    </Tooltip>
                }
                label={text.newPassword || 'New Password'}
                helperText={rulesText}
                // Tells browser password generators what the server accepts, so a
                // suggested strong password isn't rejected (letters and digits only).
                htmlInput={{
                    minLength: 8,
                    maxLength: PASSWORD_MAX,
                    passwordrules: `minlength: 8; maxlength: ${PASSWORD_MAX}; required: lower; required: upper; required: digit; allowed: lower, upper, digit;`,
                }}
                rules={{
                    required,
                    validate: {
                        rules: (v) => (v.length <= PASSWORD_MAX && PASSWORD_PATTERN.test(v)) || rulesText,
                        ...extraRules,
                    },
                }}
            />
            <PasswordField
                control={control} text={text} name="confirmPassword" autoComplete="new-password"
                {...visibility}
                label={text.confirmPassword || 'Confirm New Password'}
                rules={{
                    required,
                    validate: (v) => v === getValues('newPassword') || text.passwordsDontMatch || "Passwords don't match",
                }}
            />
        </>
    );
};
