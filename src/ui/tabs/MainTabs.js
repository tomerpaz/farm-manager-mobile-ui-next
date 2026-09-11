import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FieldsMap from './map/FieldsMap';
import { Link, useLocation, useParams } from 'react-router';
import FieldList from './fields/FieldList';
import IdaDash from './ida/IdaDash';
import IdaResources from './ida/IdaResources';
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

const inventoryPath = '/tabs/inventory';
const plansBasePath = '/tabs/plans/';


const MainTabs = () => {

    const { pathname } = useLocation();
    const { page } = useParams()
    const text = useSelector(selectLang)


    const plansPath = `${plansBasePath}${page}`;

    const { data: { userConf, usePlans } } = useGetUserDataQuery()

    console.log('MainTabs userConf', userConf)
    const isIda = userConf.filter(e => e.type === 'IDA').length > 0;
    console.log('MainTabs isIda', isIda)
    const paths = isIda ? ['/tabs/ida/dash', '/tabs/ida/sites', '/tabs/ida/resources'] : ['/tabs/map', '/tabs/fields', `/tabs/activities/${page}`/*, `/tabs/plans/${page}`*/];

    const showInventory = useSelector(selectShowInventory);
    const isInventory = showInventory && isInventoryPossible(userConf);


    const showPlans = useSelector(selectShowPlans);
    const isPlans = showPlans && isPlansPossible(userConf);
    const editLayer = useSelector(selectEditLayer);

    if (isPlans) {
        paths.push(plansPath)
    }

    if (isInventory) {
        paths.push(inventoryPath)
    }
    const plansIndex = paths.findIndex((element) => element === plansPath)
    const inventoryIndex = paths.findIndex((element) => element === inventoryPath)

    const getIndex = ((element) => element === pathname);
    const value = paths.findIndex(getIndex) > 0 ? paths.findIndex(getIndex) : 0;

    const addScroll = paths.length > 4;



    console.log('value', value);

    return (
        <Box display={'flex'} flex={1} flexDirection={'column'}>
            <Box alignItems={'stretch'} display={'flex'} flex={1} flexDirection={'column'} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} aria-label="basic tabs example"
                    // indicatorColor="secondary"
                    textColor="inherit"
                    variant={addScroll ? 'scrollable' : 'fullWidth'}
                    scrollButtons={addScroll}
                    allowScrollButtonsMobile={addScroll}
                // variant="scrollable"
                // scrollButtons={true}
                // allowScrollButtonsMobile
                >
                    {!isIda && <Tab label={text.map} to={"/tabs/map"} component={Link}   {...a11yProps(0)} />}
                    {!isIda && <Tab label={text.fields} to="/tabs/fields" component={Link} {...a11yProps(1)} />}
                    {!isIda && <Tab label={text.activities} to="/tabs/activities/0" component={Link}  {...a11yProps(2)} />}

                    {isIda && <Tab label={text.ida} to="/tabs/ida/dash" component={Link}   {...a11yProps(0)} />}
                    {isIda && <Tab label={text.sites} to="/tabs/ida/sites" component={Link}   {...a11yProps(1)} />}
                    {isIda && <Tab label={text.resources} to="/tabs/ida/resources" component={Link}   {...a11yProps(2)} />}

                    {/* {usePlans && <Tab label={text.plans} to="/tabs/plans/0" component={Link}  {...a11yProps(3)} />}  */}

                    {isPlans && <Tab label={text.plans} to={`${plansBasePath}${0}`} component={Link}  {...a11yProps(plansIndex)} />}

                    {isInventory && <Tab label={text.inventory} to={inventoryPath} component={Link}  {...a11yProps(inventoryIndex)} />}

                </Tabs>
            </Box>
            <TabPanel component={'div'} value={value} index={0}>
                {isIda && <IdaDash />}
                {!isIda &&
                    <Box display={'flex'} flex={1} flexDirection={'column'} alignItems={'stretch'}>
                        <FieldsMap />
                        {editLayer === null && <ActionFab map={true} plan={false} />}
                    </Box>}
            </TabPanel>
            <TabPanel component={'div'} value={value} index={1}>
                {isIda && <IdaSites />}
                {!isIda &&
                    <Box display={'flex'} flex={1} flexDirection={'column'} alignItems={'stretch'}>
                        <FieldList />
                        <ActionFab plan={false} />
                    </Box>}

            </TabPanel>
            <TabPanel component={'div'} value={value} index={2}>
                {isIda && <IdaResources />}
                {!isIda &&
                    <Box display={'flex'} flex={1} flexDirection={'column'} alignItems={'stretch'}>
                        <ActivitiesList plans={false} />
                        <ActionFab bottom={80} plan={false} />
                    </Box>}



            </TabPanel>
            {isPlans && <TabPanel value={value} index={plansIndex}>
                <ActivitiesList plans={true} />
                <ActionFab bottom={80} plan={true} />
            </TabPanel>}
            {isInventory && <TabPanel value={value} index={inventoryIndex}>
                <InventoryTable />
            </TabPanel>}

        </Box>
    );
}


export default MainTabs;