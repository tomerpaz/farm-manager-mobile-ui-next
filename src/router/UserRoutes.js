import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import { useGetUserDataQuery } from '../features/auth/authApiSlice'
import { apiSlice } from '../app/api/apiSlice'
import { logOut, setFieldsViewStatus, setCurrentYear, setLang, setMapCenter, setMapZoom } from '../features/app/appSlice'
import Loading from '../components/Loading'
import he from "../lang/he.json";
import en from "../lang/en.json";
import pt from "../lang/pt.json";
import es from "../lang/es.json";
import it from "../lang/it.json";
import fr from "../lang/fr.json";
import de from "../lang/de.json";
import nl from "../lang/nl.json";


const langs = {
    'he':  he,
    'pt':  pt,
    'en':  en,
    'es':  es,
    'it':  it,
    'fr':  fr,
    'de':  de,
    'nl':  nl,
}
export const getUserLang = (lang) =>{
   return langs[lang];
}

const UserRoutes = () => {

    const dispatch = useDispatch()
    
    const { data: user, isLoading, isSuccess, isError, error } = useGetUserDataQuery()

    useEffect(() => {
        if (isSuccess) {
            const lang  = localStorage.getItem('lang') ? localStorage.getItem('lang') : user.lang;
            dispatch(setLang(getUserLang(lang)));
            dispatch(setCurrentYear(user.year));
            dispatch(setFieldsViewStatus(user.fieldsViewStatus));
            dispatch(setMapCenter([user.lat, user.lng]));
            dispatch(setMapZoom(user.zoom));

            
        } 
    }, [ user, isLoading, isSuccess, isError])

    // The server answered but couldn't give this user's data (e.g. the user was
    // deleted while their token is still valid): log out instead of loading forever.
    // A numeric status means the server replied; FETCH_ERROR / TIMEOUT_ERROR (offline,
    // flaky network) don't log the user out.
    useEffect(() => {
        if (isError && typeof error?.status === 'number') {
            dispatch(logOut())
            dispatch(apiSlice.util.resetApiState())
        }
    }, [isError, error, dispatch])

    return user ? <Outlet /> : <Loading />

}

export default UserRoutes