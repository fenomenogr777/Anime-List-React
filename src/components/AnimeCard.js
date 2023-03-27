import {
   Box,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   IconButton,
   Typography,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import { nanoid } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { addAnimeToList, removeAnimeToList } from '../store/slices/animeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { loadAnimesLocalStorage } from '../store/slices/animeSlice'

function AnimeCard({ anime }) {
   const dispatch = useDispatch()

   const { listOfAnimes } = useSelector(
      ({ persistedReducer: { storeAnimes } }) => storeAnimes
   )

   // HANDLES
   const handleAddAnimeToList = anime => {
      dispatch(addAnimeToList(anime))
   }
   const handleRemoveAnimeToList = anime => {
      dispatch(removeAnimeToList(anime.mal_id))
   }

   return (
      <Card
         key={nanoid()}
         position='relative'
         sx={{
            width: '230px',
            height: 'auto',
            backgroundColor: 'primary.light',
            color: '#fff',
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
               sx={{
                  width: '267px',
                  height: '24px',
                  overflow: 'hidden',
               }}
            >
               {anime?.title.toUpperCase()}
            </Typography>
            <Typography>EPISODES: {anime?.episodes}</Typography>
            <Typography>SCORE: {anime?.score || 'N/A'}</Typography>
         </CardContent>

         <CardActions>
            {listOfAnimes?.find(val => val?.mal_id === anime?.mal_id) ? (
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
            )}

            <IconButton>
               <VideoCameraBackIcon />
            </IconButton>
         </CardActions>
      </Card>
   )
}
export default AnimeCard
