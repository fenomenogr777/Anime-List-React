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
import DropDown from './DropDown'

function AnimeCard({ anime, snackbar }) {
   const dispatch = useDispatch()
   const [isExpanded, setIsExpanded] = useState(false)
   const [animeObj, setAnimeObj] = useState('')

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
   const handleAddAnimeToList = status => {
      dispatch(addAnimeToList({ ...animeObj, userStatus: status }))
      setIsExpanded(false)
      setAnimeObj('')
   }

   const handleRemoveAnimeToList = anime => {
      dispatch(removeAnimeToList(anime.mal_id))
   }

   const handleOpenDropdown = () => {
      setIsExpanded(!isExpanded)
      setAnimeObj(anime)
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
            <Typography color='#160f40'>
               EPISODES: {anime.episodes || 0}
            </Typography>
            <Typography color='#160f40'>
               SCORE: {anime?.score || 'N/A'}
            </Typography>
         </CardContent>

         <CardActions>
            {listOfAnimes.find(value => value.mal_id === anime.mal_id) ? (
               <Button
                  variant='contained'
                  color='error'
                  onClick={() => handleRemoveAnimeToList(anime)}
               >
                  Remove from List
               </Button>
            ) : (
               <Button
                  endIcon={<AddCircleIcon />}
                  variant='contained'
                  className='dropdown-status'
                  color='success'
                  onClick={handleOpenDropdown}
               >
                  Add to list
               </Button>
            )}

            <Box position='relative'>
               {isExpanded && (
                  <Box
                     position='absolute'
                     left='-8px'
                     top='-110px'
                     padding='5px'
                     bgcolor='black'
                     borderRadius={2}
                  >
                     <DropDown onEdit={handleAddAnimeToList} />
                  </Box>
               )}
            </Box>
         </CardActions>
      </Card>
   )
}
export default AnimeCard
