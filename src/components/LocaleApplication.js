import React, { useEffect, useState } from 'react';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import 'dayjs/locale/he';
import 'dayjs/locale/es';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/pt';
// import 'dayjs/locale/nl';
// import 'dayjs/locale/fr';
import { selectLang } from '../features/app/appSlice';
import { useSelector } from 'react-redux';
import { prefixer } from 'stylis';

// Create rtl cache
// const cacheRtl = createCache({
//   key: 'muirtl',
//   stylisPlugins: [prefixer, rtlPlugin],
// });

// AdapterDayjs takes the locale as the registered dayjs locale code (a
// string), not a locale object like date-fns did — the imports above just
// register each locale as a side effect, and this map picks the code.
const localeMap = {
    en: 'en-gb',
    he: 'he',
     es: 'es',
     pt: 'pt',
    // nl: 'nl',
    // fr: 'fr',
};

function getDayjsLocale(lang) {
    const result = localeMap[lang];
    if (result) {
        return result;
    }
    return localeMap.en; // default
}

const LocaleApplication = (props) => {

    const { lang, dir } = useSelector(selectLang)

    const [cacheRtl, setCacheRtl] = useState(null);
    const [dayjsLocaleValue, setDayjsLocaleValue] = useState(getDayjsLocale(lang));

    useEffect(() => {
        if (dir === 'rtl') {
            setCacheRtl(createCache({
                key: 'muirtl',
                stylisPlugins: [prefixer, rtlPlugin],
            }));
        } else {
            setCacheRtl(null);
        }
    }, [dir]);


    useEffect(() => {
        setDayjsLocaleValue(getDayjsLocale(lang))
    }, [lang]);


    return cacheRtl ?
        <CacheProvider value={cacheRtl}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjsLocaleValue}  {...props} />
        </CacheProvider> :
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjsLocaleValue}  {...props} />

}
export default LocaleApplication;



