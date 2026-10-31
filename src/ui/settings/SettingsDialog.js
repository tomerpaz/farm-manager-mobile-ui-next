import React from 'react'
import { Alert, Box, Checkbox, Dialog, DialogContent, FormControlLabel, IconButton, Link, MenuItem, Select, Tooltip, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { selectLang, selectOpenSettings, selectShowInventory, selectShowPlans, setLang, setOpenSettings, setShowInventory, setShowPlans } from '../../features/app/appSlice';
import { ContentCopy, DesktopWindowsOutlined, MobileFriendlyOutlined } from '@mui/icons-material';
import { getUserLang } from '../../router/UserRoutes';
import { isInventoryPossible, isMobile, isPlansPossible } from '../FarmUtil';
import { useGetUserDataQuery } from '../../features/auth/authApiSlice';
import DialogAppBar from '../dialog/DialogAppBar';
import { Transition } from '../Util';
import { AUTO_PRECIPITATION, INBOX_EMAIL, useGetSettingsQuery, useSetSettingsMutation } from '../../features/ida/idaApiSlice';

const flagMap = [
    { id: 'en', flag: 'GB', label: 'English', emoji: '🇬🇧' },
    { id: 'pt', flag: 'PT', label: 'Português', emoji: '🇵🇹' },
    { id: 'es', flag: 'ES', label: 'Español', emoji: '🇪🇸' },
    { id: 'it', flag: 'IT', label: 'Italiano', emoji: '🇮🇹' },
    { id: 'fr', flag: 'FR', label: 'Français', emoji: '🇫🇷' },
    { id: 'de', flag: 'DE', label: 'Deutsch', emoji: '🇩🇪' },
    { id: 'nl', flag: 'NL', label: 'Nederlands', emoji: '🇳🇱' },
    { id: 'he', flag: 'IL', label: 'עברית', emoji: '🇮🇱' },
];

const SettingsDialog = () => {

    const text = useSelector(selectLang)
    const dispatch = useDispatch()
    const open = useSelector(selectOpenSettings)

    const [showAgent, setShowAgent] = React.useState(false);

    const { data: user, isSuccess: isUserSuccess } = useGetUserDataQuery()

    const isInventory = isUserSuccess ? isInventoryPossible(user.userConf) : false;
    const isPlans = isUserSuccess ? isPlansPossible(user.userConf) : false;
    // GLOBALG.A.P. Number of the user's business — shown for reference only.
    const ggn = isUserSuccess ? user.ggn : null;
    const isIda = isUserSuccess && (user.userConf || []).some(e => e.type === 'IDA');

    // IDA only: let the server fill precipitation automatically from Open-Meteo.
    // Stored server-side as the business's AUTO_PRECIPITATION setting ("true"/"false");
    // unchecked until it's been saved once.
    const { data: autoPrecipitation } = useGetSettingsQuery(AUTO_PRECIPITATION, { skip: !isIda });
    const [setSettings, { isLoading: isSavingSettings }] = useSetSettingsMutation();
    const autoPrecipitationOn = autoPrecipitation?.value === 'true';

    // IDA only: a personal inbox address. Opted in = the GET returns a
    // ConfigParam whose value is the address itself (not "true"); opted out =
    // empty body. Own mutation instance so saving one setting doesn't
    // disable the other's checkbox.
    const { data: inboxEmail, isFetching: isFetchingInbox } = useGetSettingsQuery(INBOX_EMAIL, { skip: !isIda });
    const [setInboxSetting, { isLoading: isSavingInbox }] = useSetSettingsMutation();
    const inboxAddress = inboxEmail?.value || null;
    const [inboxError, setInboxError] = React.useState(null);
    const [inboxCopied, setInboxCopied] = React.useState(false);

    const showInventory = useSelector(selectShowInventory);
    const showPlans = useSelector(selectShowPlans);

    const handleClose = () => {
        dispatch(setOpenSettings(false));
    }

    const handleLangChange = (lang) => {
        dispatch(setLang(getUserLang(lang)))
        dispatch(setOpenSettings(false));
    }

    const handleInvenotryChange = () => {
        dispatch(setShowInventory(!showInventory));
        dispatch(setOpenSettings(false));
    }

    const handlePlansChange = () => {
        dispatch(setShowPlans(!showPlans));
        dispatch(setOpenSettings(false));
    }

    // Stays open (unlike the local toggles above) so the saved state is visible.
    const handleAutoPrecipitationChange = (e) => {
        setSettings({ type: AUTO_PRECIPITATION, value: String(e.target.checked) });
    }

    // Also stays open — opting in is how the user gets to see (and copy) the address.
    const handleInboxEmailChange = async (e) => {
        setInboxError(null);
        setInboxCopied(false);
        try {
            await setInboxSetting({ type: INBOX_EMAIL, value: String(e.target.checked) }).unwrap();
        } catch (err) {
            setInboxError(err?.data?.msg || text.inboxEmailError || 'Could not update the inbox email. Please try again.');
        }
    }

    const handleCopyInbox = async () => {
        try {
            await navigator.clipboard.writeText(inboxAddress);
            setInboxCopied(true);
        } catch {
            // Clipboard can be blocked (insecure context, permissions) — the
            // address is still selectable on screen.
        }
    }

    // const handleNewActivityGeoChange = () => {
    //     dispatch(setNewActivityGeo(!newActivityGeo));
    //     dispatch(setOpenSettings(false));
    // }

    return (
        <Dialog
            fullScreen={isMobile()} fullWidth={!isMobile()}
            open={open}
            onClose={handleClose}
            disableRestoreFocus={true}
            slots={{ transition: Transition }}
        >
            <DialogAppBar onClose={handleClose} title={""} />

            <DialogContent>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={text.lang}
                    fullWidth
                    onChange={e => handleLangChange(e.target.value)}
                >
                    {flagMap.map(e =>

                        <MenuItem key={e.id} value={e.id}  >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    alignContent: 'center'
                                }}>
                                <Box sx={{
                                    fontSize: 25
                                }}> {e.emoji}</Box>
                                <Box
                                    sx={{
                                        marginLeft: 1,
                                        marginRight: 1
                                    }}>{`${e.label}`} </Box>
                            </Box>
                        </MenuItem>
                    )}
                </Select>
                {ggn &&
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="caption" color="text.secondary">GGN</Typography>
                        <Typography variant="body1">{ggn}</Typography>
                    </Box>
                }
                {isIda &&
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                        <FormControlLabel
                            control={<Checkbox checked={autoPrecipitationOn} disabled={isSavingSettings} onChange={handleAutoPrecipitationChange} />}
                            // Only the source name is the link ({source} in the translated text, so
                            // each language places it). A link inside a <label> doesn't toggle the
                            // checkbox — it just opens the site.
                            label={(() => {
                                const [before, after = ''] = (text.precipitationBySource || 'Precipitation by {source}').split('{source}');
                                return (
                                    <>
                                        {before}
                                        <Link href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo.com</Link>
                                        {after}
                                    </>
                                );
                            })()}
                        />
                    </Box>
                }
                {isIda &&
                    <Box sx={{ marginTop: 2 }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={!!inboxAddress}
                                    disabled={isSavingInbox || isFetchingInbox}
                                    onChange={handleInboxEmailChange}
                                />
                            }
                            label={text.personalInboxEmail || 'Personal inbox email'}
                        />
                        {inboxAddress &&
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, paddingInlineStart: 4 }}>
                                {/* Selectable as a fallback when the clipboard isn't available. */}
                                <Typography variant="body2" sx={{ userSelect: 'all', wordBreak: 'break-all' }}>
                                    {inboxAddress}
                                </Typography>
                                <Tooltip title={inboxCopied ? (text.copied || 'Copied') : (text.copy || 'Copy')}>
                                    <IconButton size="small" aria-label={text.copy || 'Copy'} onClick={handleCopyInbox}>
                                        <ContentCopy fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        }
                        {inboxError &&
                            <Alert severity="error" sx={{ marginTop: 1 }} onClose={() => setInboxError(null)}>
                                {inboxError}
                            </Alert>
                        }
                    </Box>
                }
                {isPlans &&
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                        <FormControlLabel control={<Checkbox checked={showPlans} onChange={handlePlansChange} />} label={text.plans} />
                    </Box>
                }
                {isInventory &&
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                        <FormControlLabel control={<Checkbox checked={showInventory} onChange={handleInvenotryChange} />} label={text.inventory} />


                    </Box>
                }
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                    <Box>
                        <IconButton sx={{ padding: 0 }} onClick={_ => setShowAgent(!showAgent)} >
                            {isMobile() ? <MobileFriendlyOutlined /> : <DesktopWindowsOutlined />}
                        </IconButton>
                    </Box>
                    <Box sx={{
                        margin: 1
                    }} />
                    {showAgent && <Box>{navigator.userAgent}</Box>}
                </Box>
            </DialogContent>
        </Dialog>
    );
}
export default SettingsDialog