import {
   Box,
   Button,
   Card,
   CardContent,
   CardMedia,
   Grid,
   IconButton,
   styled,
   Typography,
} from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import DropDown from '../DropDown'
import CancelIcon from '@mui/icons-material/Cancel'
import StarIcon from '@mui/icons-material/Star'
import { editAnimeStatus, removeAnimeToList } from '../../store'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

function RenderedAnimes({ listOfAnimes }) {
   const dispatch = useDispatch()

   const [openDropdown, setOpenDropdown] = useState(false)

   const handleRemoveAnime = id => {
      dispatch(removeAnimeToList(id))
   }

   const handleEditUserStatus = editedStatus => {
      console.log(editedStatus)
      console.log(openDropdown)
      dispatch(editAnimeStatus({ status: editedStatus, id: openDropdown }))
      setOpenDropdown(false)
   }

   const handleOpenDropDown = id => {
      setOpenDropdown(id)
      if (id === openDropdown) {
         setOpenDropdown('')
      }
   }

   const renderedAnimes = listOfAnimes?.map((anime, index) => {
      return (
         <Grid
            item
            key={nanoid()}
         >
            <Card
               sx={{
                  width: '280px',
                  height: '120px',
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
               <CardContent
                  sx={{
                     padding: '10px 0px 0px 0px ',
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'flex-start',
                     justifyContent: 'space-between',
                     '&:last-child': { pb: 0 },
                  }}
               >
                  <Typography color='white'>
                     {' '}
                     {anime.title.slice(0, 35)}
                  </Typography>

                  <Box
                     display='flex'
                     alignItems='flex-start'
                     flexDirection='column'
                  >
                     <Box
                        display='flex'
                        gap={1}
                     >
                        {/* score */}
                        <Box
                           display='flex'
                           gap={0.4}
                        >
                           <StarIcon color='primary' />
                           <Typography
                              color='white'
                              variant='subtitle1'
                           >
                              {anime.score}
                           </Typography>
                        </Box>
                        {/* episodes */}
                        <Box
                           display='flex'
                           gap={0.4}
                           alignItems='center'
                        >
                           <Typography
                              color='primary'
                              variant='subtitle1'
                              fontWeight={600}
                           >
                              EPS
                           </Typography>
                           <Typography
                              color='white'
                              variant='subtitle1'
                           >
                              {anime.episodes || 'N/A'}
                           </Typography>
                        </Box>
                     </Box>
                     {/* status */}
                     <Button
                        position='relative'
                        id={anime.mal_id}
                        onClick={() => handleOpenDropDown(anime.mal_id)}
                     >
                        {anime.userStatus}
                     </Button>
                  </Box>

                  {openDropdown === anime.mal_id && (
                     <Box
                        position='absolute'
                        backgroundColor='white'
                     >
                        <DropDown onEdit={handleEditUserStatus} />
                     </Box>
                  )}
               </CardContent>
               {/* <IconButton
                  color='error'
                  onClick={() => handleRemoveAnime(anime?.mal_id)}
               >
                  <CancelIcon />
               </IconButton> */}
            </Card>
         </Grid>
      )
   })

   return renderedAnimes
}
export default RenderedAnimes
