import { Box } from '@mui/material'
import { useParams, useSearchParams } from 'react-router'
import { useGetSiteQuery } from '../../features/sites/sitesApiSlice'
import SiteFormHook from './SiteFormHook'
import { getDefaultLocation } from '../FarmUtil'
import { useState } from 'react'

const SiteForm = () => {

  const { type, src, siteId } = useParams()
  let [searchParams, setSearchParams] = useSearchParams();


  const { data: site, isSuccess: isSitesSuccess } = useGetSiteQuery(siteId)





  //  const { data: user, isLoading } = useGetUserDataQuery()
  // const currentYear = useSelector(selectCurrentYear)
  console.log('SiteForm sid', site)
  // const data = useFields(currentYear)

  // const longitude = useSelector(selectLongitude);
  // const latitude = useSelector(selectLatitude);
  // const scouter = useSelector(selectDefaultScouter)

  // const field = useFieldsById(currentYear, Number(fid));


  // const position = latitude && longitude  ? [latitude,longitude]  : null;










  if (!site) {
    return (
      <Box >
        <p>Loading...</p>
      </Box>
    )
  }

  const copySite = (site) => { return { ...site, size: site.size ? site.size : '', lat: site.lat ? site.lat : '', lng: site.lng ? site.lng : '' } }
  return (
    <Box >
      <SiteFormHook site={copySite(site)} />
    </Box>
  )
}

export default SiteForm