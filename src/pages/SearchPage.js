import { useSelector } from 'react-redux'
import { Box, Grid } from '@mui/material'
import FetchData from '../components/FetchData'
import SearchBar from '../components/SearchBar'

function SearchPage({ snackbar }) {
   const store = useSelector(store => store)
   console.log(store)

   const { listOfAnimes } = useSelector(
      ({ persistedReducer: { storeAnimes } }) => storeAnimes
   )

   console.log(listOfAnimes)

   return (
      <Box>
         <Box
            display='flex'
            justifyContent='center'
         >
            <SearchBar />
         </Box>
         <Grid
            container
            justifyContent='center'
         >
            <FetchData snackbar={snackbar} />
         </Grid>
      </Box>
   )
}
export default SearchPage
