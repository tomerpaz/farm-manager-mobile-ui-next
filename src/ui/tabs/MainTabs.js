import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FieldsMap from './map/FieldsMap';
import { Link, Navigate, useLocation } from 'react-router';
import FieldList from './fields/FieldList';
import IdaDash from './ida/IdaDash';
import Resources from './resources/Resources';
import IdaSites from './ida/IdaSites';
import ActivitiesList from './activities/ActivitiesList';
import { selectEditLayer, selectLang, selectShowInventory, selectShowPlans } from '../../features/app/appSlice';
import { useSelector } from 'react-redux';
import ActionFab from '../../components/ui/ActionFab';
import { useGetUserDataQuery } from '../../features/auth/authApiSlice';
import { isInventoryPossible, isPlansPossible } from '../FarmUtil';
import InventoryTable from './inventory/InventoryTable';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Column = ({ children }) => (
    <Box
        sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'stretch'
        }}>
        {children}
    </Box>
);

const MainTabs = () => {

    const { pathname } = useLocation();
    const text = useSelector(selectLang);
    const showInventory = useSelector(selectShowInventory);
    const showPlans = useSelector(selectShowPlans);
    const editLayer = useSelector(selectEditLayer);

    const { data } = useGetUserDataQuery();
    const userConf = data?.userConf ?? [];

    const isIda = userConf.some(e => e.type === 'IDA');
    const isPlans = showPlans && isPlansPossible(userConf);
    const isInventory = showInventory && isInventoryPossible(userConf);

    // Each tab is declared once: `to` is where the tab links, `match` is the
    // pathname prefix that selects it (so /tabs/activities/:page still matches).
    const tabs = isIda
        ? [
            { key: 'ida', label: text.ida, to: '/tabs/ida/dash', match: '/tabs/ida/dash', element: <IdaDash /> },
            { key: 'sites', label: text.sites, to: '/tabs/ida/sites', match: '/tabs/ida/sites', element: <IdaSites /> },
            { key: 'resources', label: text.resources, to: '/tabs/resources', match: '/tabs/resources', element: <Resources /> },
        ]
        : [
            {
                key: 'map', label: text.map, to: '/tabs/map', match: '/tabs/map',
                element: <Column><FieldsMap />{editLayer === null && <ActionFab map={true} plan={false} />}</Column>
            },
            {
                key: 'fields', label: text.fields, to: '/tabs/fields', match: '/tabs/fields',
                element: <Column><FieldList /><ActionFab plan={false} /></Column>
            },
            {
                key: 'activities', label: text.activities, to: '/tabs/activities/0', match: '/tabs/activities',
                element: <Column><ActivitiesList plans={false} /><ActionFab bottom={80} plan={false} /></Column>
            },
            isPlans && {
                key: 'plans', label: text.plans, to: '/tabs/plans/0', match: '/tabs/plans',
                element: <><ActivitiesList plans={true} /><ActionFab bottom={80} plan={true} /></>
            },
            isInventory && {
                key: 'inventory', label: text.inventory, to: '/tabs/inventory', match: '/tabs/inventory',
                element: <InventoryTable />
            },
        ].filter(Boolean);

    const matchedIndex = tabs.findIndex(t => pathname.startsWith(t.match));

    // A path that belongs to the other mode (e.g. /tabs/map for an IDA user)
    // would otherwise show tab 0 under the wrong AppBar, which follows the URL.
    if (data && matchedIndex === -1) {
        return <Navigate to={tabs[0].to} replace />;
    }

    const value = Math.max(0, matchedIndex);
    const addScroll = tabs.length > 4;

    return (
        <Box
            sx={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column'
            }}>
            <Box
                sx={{
                    alignItems: 'stretch',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    borderBottom: 1,
                    borderColor: 'divider'
                }}>
                <Tabs value={value} aria-label="main tabs"
                    textColor="inherit"
                    variant={addScroll ? 'scrollable' : 'fullWidth'}
                    scrollButtons={addScroll}
                    allowScrollButtonsMobile={addScroll}
                >
                    {tabs.map((t, i) => (
                        <Tab key={t.key} label={t.label} to={t.to} component={Link} {...a11yProps(i)} />
                    ))}
                </Tabs>
            </Box>
            {tabs.map((t, i) => (
                <TabPanel key={t.key} value={value} index={i}>
                    {t.element}
                </TabPanel>
            ))}
        </Box>
    );
}


export default MainTabs;
