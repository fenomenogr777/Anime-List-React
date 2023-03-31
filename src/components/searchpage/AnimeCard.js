import {
   Box,
   Button,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
} from '@mui/material'

import { nanoid } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'

import {
   addAnimeToList,
   removeAnimeToList,
} from '../../store/slices/animeSlice'
import { useDispatch, useSelector } from 'react-redux'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import DropDown from '../DropDown'
import StarIcon from '@mui/icons-material/Star'

function AnimeCard({ anime }) {
   const dispatch = useDispatch()

   // SETS DROPDOWN IF IS OPEN OR NOT
   const [isExpanded, setIsExpanded] = useState(false)
   const [animeObj, setAnimeObj] = useState('')

   // GETS USER FAVOURITE LIST OF ANIMES FROM REDUX
   const listOfAnimes = useSelector(
      ({
         persistedReducer: {
            storeAnimes: { listOfAnimes },
         },
      }) => listOfAnimes
   )

   console.log(listOfAnimes)

   // WHEN USER CLICKS SOMEHERE ELSE CLOSES DROPDOWN
   useEffect(() => {
      const closeDropdown = e => {
         const target = e.target.closest('.dropdown-status')
         if (target) return
         setIsExpanded(false)
      }
      window.addEventListener('click', closeDropdown)
      return () => window.removeEventListener('click', closeDropdown)
   }, [])

   // HANDLES
   // add anime
   const handleAddAnimeToList = status => {
      // extra add STATUS/DATE ADDED
      dispatch(
         addAnimeToList({
            ...animeObj,
            userStatus: status,
            dateAdded: { date: new Date(), timestamp: Date.now() },
         })
      )
      setIsExpanded(false)
      setAnimeObj('')
   }
   // remove anime
   const handleRemoveAnimeToList = anime => {
      dispatch(removeAnimeToList(anime.mal_id))
   }
   // opendropdown and setsAnimobj on current anime
   const handleOpenDropdown = () => {
      setIsExpanded(!isExpanded)
      setAnimeObj(anime)
   }

   // JSX
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
            {/* FOTO APO CARD */}
            <CardMedia
               component='img'
               image={anime?.images.jpg.image_url}
               alt='animeImage'
               sx={{ height: '260px', width: '100%' }}
            />
         </CardActionArea>

         {/* PERIGRAFH CARD */}
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
            <Box
               display='flex'
               gap={0.4}
            >
               <StarIcon sx={{ color: 'purple' }} />
               <Typography
                  color='#160f40'
                  variant='subtitle1'
               >
                  {anime?.score || 'N/A'}
               </Typography>
            </Box>
         </CardContent>

         {/* TA BUTTONS APO CARD */}
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
