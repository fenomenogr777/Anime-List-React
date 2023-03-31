import { Box, Grid, TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import RenderedAnimes from '../components/listpage/RenderedAnimes'
import FilterAnimes from '../components/listpage/FilterAnimes'

function ListPage() {
   const store = useSelector(store => store)

   console.log(store)

   // GET LIST OF ANIMES
   const listOfAnimes = useSelector(
      ({
         persistedReducer: {
            storeAnimes: { listOfAnimes },
         },
         storeForm: {
            search: { name, score, status },
         },
      }) => {
         return listOfAnimes.filter(
            anime =>
               anime.title.toLowerCase().includes(name) &&
               anime.score > score &&
               anime.userStatus.includes(status)
         )
      }
   )

   console.log(listOfAnimes)

   // JSX
   return (
      <Box>
         <Box
            color='black'
            display='flex'
            alignItems='center'
            flexDirection='column'
            gap={2}
         >
            <FilterAnimes listOfAnimes={listOfAnimes} />
            <Grid
               container
               display='flex'
               alignItems='center'
               justifyContent='center'
            >
               <RenderedAnimes listOfAnimes={listOfAnimes} />
            </Grid>
         </Box>
      </Box>
   )
}
export default ListPage
