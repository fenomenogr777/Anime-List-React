import { useSelector } from 'react-redux'
import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import FetchData from './FetchData'
import { useEffect } from 'react'
import { useFetchAnimesQuery } from '../store/apis/animesApi'

function AnimeList() {
   const store = useSelector(store => store)
   console.log(store)

   const { listOfAnimes } = useSelector(
      ({ persistedReducer: { storeAnimes } }) => storeAnimes
   )

   console.log(listOfAnimes)

   const content = FetchData()

   return (
      <Box>
         <Grid
            container
            justifyContent='center'
         >
            {content}
         </Grid>
      </Box>
   )
}
export default AnimeList
