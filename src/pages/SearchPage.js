import { useSelector } from 'react-redux'
import { Box, Grid } from '@mui/material'
import SearchBar from '../components/searchpage/SearchBar'
import { useFetchAnimesQuery } from '../store/apis/animesApi'
import FetchData from '../components/searchpage/FetchData'

function SearchPage() {
   // GETS QUERY WHICH RECEIVED FROM SEARCHBAR EX. "NARUTO"
   const { query } = useSelector(({ storeForm }) => storeForm)

   // GET DATA BASED ON QUERY
   const { data, error, isLoading } = useFetchAnimesQuery(query)

   return (
      <Box>
         <Box
            display='flex'
            justifyContent='center'
         >
            {/* searchbar  */}
            <SearchBar />
         </Box>
         <Grid
            container
            justifyContent='center'
         >
            {/* RETURNS FINAL DATA */}
            <FetchData
               data={data}
               error={error}
               isLoading={isLoading}
            />
         </Grid>
      </Box>
   )
}
export default SearchPage
