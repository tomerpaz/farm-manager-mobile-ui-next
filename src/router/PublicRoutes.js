import { useSelector } from 'react-redux';
import {Navigate, Outlet} from 'react-router'
//import { DEFAULT_ROUTE } from '../App';
import { selectCurrentToken } from '../features/app/appSlice';

const  PublicRoutes = () =>{
	const token = useSelector(selectCurrentToken);
  return token?<Navigate to={"/"}/>: <Outlet/>
}

export default PublicRoutes;

