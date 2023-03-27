import { Box, Button, IconButton, Typography } from '@mui/material'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import CancelIcon from '@mui/icons-material/Cancel'
import { removeAnimeToList } from '../store'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'

function UserFavouriteList({ onClose }) {
   const dispatch = useDispatch()

   const { listOfAnimes } = useSelector(
      ({ persistedReducer: { storeAnimes } }) => storeAnimes
   )

   const handleDeleteAnime = id => {
      dispatch(removeAnimeToList(id))
   }

   const handleOpenUserList = () => {
      onClose()
   }

   const renderedAnimes = listOfAnimes?.map(anime => {
      return (
         <Box
            key={nanoid()}
            display='flex'
            justifyContent='flex-start'
            alignItems='center'
         >
            <IconButton
               color='success'
               onClick={() => handleDeleteAnime(anime.mal_id)}
            >
               <CancelIcon />
            </IconButton>
            <Typography>{anime?.title}</Typography>
         </Box>
      )
   })

   return (
      <Box
         height='300px'
         width='300px'
         bgcolor='red'
         padding={2}
         display='flex'
         flexDirection='column'
         justifyContent='space-between'
      >
         <Box sx={{ overflowX: 'auto' }}>{renderedAnimes}</Box>

         <Button
            component={Link}
            to='/userList'
            variant='contained'
            onClick={handleOpenUserList}
            size='small'
         >
            Open Full List
         </Button>
      </Box>
   )
}
export default UserFavouriteList
