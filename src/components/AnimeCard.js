import {
   Box,
   Button,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   IconButton,
   Typography,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { nanoid } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { addAnimeToList, removeAnimeToList } from '../store/slices/animeSlice'
import { useDispatch, useSelector } from 'react-redux'
import AddCircleIcon from '@mui/icons-material/AddCircle'

function AnimeCard({ anime, snackbar }) {
   const dispatch = useDispatch()
   const [isExpanded, setIsExpanded] = useState(false)

   const { listOfAnimes } = useSelector(
      ({ persistedReducer: { storeAnimes } }) => storeAnimes
   )

   useEffect(() => {
      const closeDropdown = e => {
         const target = e.target.closest('.dropdown-status')
         console.log(target)
         if (target) return
         setIsExpanded(false)
      }

      window.addEventListener('click', closeDropdown)
      return () => window.removeEventListener('click', closeDropdown)
   }, [])

   // HANDLES
   const handleAddAnimeToList = (anime, status) => {
      dispatch(addAnimeToList({ ...anime, userStatus: status }))
     
      setIsExpanded(false)
   }
   const handleRemoveAnimeToList = anime => {
      dispatch(removeAnimeToList(anime.mal_id))
   }

   const handleAddAnimeDropdown = () => {
      setIsExpanded(!isExpanded)
   }

   return (
      <Card
         key={nanoid()}
         position='relative'
         sx={{
            border: '1px solid #ccf381',
            width: '230px',
            height: 'auto',
            backgroundColor: '#fafef2',
            margin: '10px',
         }}
      >
         <CardActionArea
            LinkComponent='a'
            target='_blank'
            href={anime?.url}
         >
            <CardMedia
               component='img'
               image={anime?.images.jpg.image_url}
               alt='animeImage'
               sx={{ height: '260px', width: '100%' }}
            />
         </CardActionArea>
         <CardContent>
            <Typography
               color='#160f40'
               fontWeight={600}
               sx={{
                  width: '267px',
                  height: '24px',
                  overflow: 'hidden',
               }}
            >
               {anime?.title.toUpperCase()}
            </Typography>
            <Typography color='#160f40'>EPISODES: {anime?.episodes}</Typography>
            <Typography color='#160f40'>
               SCORE: {anime?.score || 'N/A'}
            </Typography>
         </CardContent>

         <CardActions>
            {/* {listOfAnimes?.find(val => val?.mal_id === anime?.mal_id) ? (
               <IconButton
                  color='error'
                  onClick={() => handleRemoveAnimeToList(anime)}
               >
                  <FavoriteIcon />
               </IconButton>
            ) : (
               <IconButton onClick={() => handleAddAnimeToList(anime)}>
                  <FavoriteIcon />
               </IconButton>
            )} */}

            {listOfAnimes.find(value => value.mal_id === anime.mal_id) ? (
               <Button
                  variant='contained'
                  color='error'
               >
                  Remove from List
               </Button>
            ) : (
               <IconButton
                  className='dropdown-status'
                  color='success'
                  onClick={handleAddAnimeDropdown}
               >
                  Add <AddCircleIcon />
               </IconButton>
            )}

            <Box position='relative'>
               {isExpanded && (
                  <Box
                     position='absolute'
                     left={0}
                     top='-100px'
                     zIndex={999}
                     padding='5px'
                     bgcolor='red'
                  >
                     <Button
                        size='small'
                        color='success'
                        onClick={() => handleAddAnimeToList(anime, 'watching')}
                     >
                        Watching
                     </Button>
                     <Button
                        size='small'
                        onClick={() => handleAddAnimeToList(anime, 'dropped')}
                     >
                        Dropped
                     </Button>
                     <Button
                        size='small'
                        onClick={() => handleAddAnimeToList(anime, 'onhold')}
                     >
                        OnHold
                     </Button>
                  </Box>
               )}
            </Box>
         </CardActions>
      </Card>
   )
}
export default AnimeCard
