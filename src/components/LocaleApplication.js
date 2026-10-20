import React, { useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import 'dayjs/locale/he';
import 'dayjs/locale/es';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/pt';
import 'dayjs/locale/it';
import 'dayjs/locale/nl';
import 'dayjs/locale/fr';
import 'dayjs/locale/de';
import { selectLang } from '../features/app/appSlice';
import { useSelector } from 'react-redux';
import { prefixer } from 'stylis';

// Date pickers show a 2-digit year (e.g. 21/10/26). Keeps each locale's own
// day/month order and separator — only YYYY becomes YY.
const shortYearDateFormats = (locale) => {
    const localeFormat = dayjs.Ls[locale]?.formats?.L || 'MM/DD/YYYY';
    return { keyboardDate: localeFormat.replace('YYYY', 'YY') };
};

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
     it: 'it',
    nl: 'nl',
    fr: 'fr',
    de: 'de',
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


    const dateFormats = useMemo(() => shortYearDateFormats(dayjsLocaleValue), [dayjsLocaleValue]);

    return cacheRtl ?
        <CacheProvider value={cacheRtl}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjsLocaleValue} dateFormats={dateFormats} {...props} />
        </CacheProvider> :
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjsLocaleValue} dateFormats={dateFormats} {...props} />

}
export default LocaleApplication;



