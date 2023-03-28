import {
   Box,
   Button,
   Card,
   CardContent,
   CardMedia,
   Grid,
   IconButton,
   TextField,
   Typography,
} from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAllAnimeList, getSearchName, getStatus } from '../store'
import HomeIcon from '@mui/icons-material/Home'
import CancelIcon from '@mui/icons-material/Cancel'
import { removeAnimeToList } from '../store'

function ListPage() {
   const dispatch = useDispatch()
   const [value, setValue] = useState('')

   const handleRemoveAnime = id => {
      dispatch(removeAnimeToList(id))
   }

   const listOfAnimes = useSelector(
      ({
         persistedReducer: {
            storeAnimes: { listOfAnimes },
         },
         storeForm: {
            search: { name, status },
         },
      }) => {
         return listOfAnimes.filter(
            anime =>
               anime.title.toLowerCase().includes(name) &&
               anime.userStatus.includes(status)
         )
      }
   )

   const renderedAnimes = listOfAnimes?.map((anime, index) => {
      return (
         <Grid
            item
            xs={6}
            key={nanoid()}
         >
            <Card
               sx={{
                  backgroundColor: '#9183e5',
                  margin: '10px',
                  display: 'flex',
               }}
            >
               <CardMedia
                  component='img'
                  image={anime?.images.jpg.image_url}
                  alt='animeImage'
                  sx={{
                     height: '100px',
                     width: '60px',
                     borderRadius: '11px',
                     padding: '10px',
                  }}
               />
               <CardContent>
                  <Typography color='white'> {anime.title}</Typography>
                  <Button> {anime.userStatus}</Button>
               </CardContent>
               <IconButton
                  color='error'
                  onClick={() => handleRemoveAnime(anime?.mal_id)}
               >
                  <CancelIcon />
               </IconButton>
            </Card>
         </Grid>
      )
   })

   const handleChange = e => {
      console.log(e)
      const { value } = e.target
      setValue(value)
      dispatch(getSearchName(value.toLowerCase()))
   }

   // JSX
   return (
      <Box>
         <Button
            startIcon={<HomeIcon />}
            component={Link}
            to='/'
            variant='contained'
         >
            Main Page
         </Button>
         <Box
            color='black'
            display='flex'
            flexDirection='column'
            gap={2}
         >
            <Typography
               variant='h5'
               color='#fff'
            >
               Filter
            </Typography>

            <Box display='flex'>
               <TextField
                  size='small'
                  value={value}
                  placeholder='Search...'
                  onChange={handleChange}
               />
            </Box>
            <Box>
               <Typography>LIST ({listOfAnimes.length} Items)</Typography>
               <Box>
                  <Button
                     size='small'
                     onClick={() => dispatch(getStatus(''))}
                  >
                     All
                  </Button>
                  |
                  <Button
                     size='small'
                     onClick={() => dispatch(getStatus('watching'))}
                  >
                     Watching
                  </Button>
                  |
                  <Button
                     size='small'
                     onClick={() => dispatch(getStatus('finished'))}
                  >
                     Finished
                  </Button>
                  |
                  <Button
                     size='small'
                     onClick={() => dispatch(getStatus('onhold'))}
                  >
                     OnHold
                  </Button>
                  |
                  <Button
                     size='small'
                     onClick={() => dispatch(getStatus('dropped'))}
                  >
                     Dropped
                  </Button>
                  <Button
                     variant='contained'
                     size='small'
                     color='error'
                     onClick={() => dispatch(deleteAllAnimeList())}
                  >
                     DELETE ALL
                  </Button>
               </Box>
            </Box>

            <Grid container>{renderedAnimes}</Grid>
         </Box>
      </Box>
   )
}
export default ListPage
