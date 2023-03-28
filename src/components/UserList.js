import { Box, Button, TextField, Typography } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSearchName } from '../store'

function UserList() {
   const dispatch = useDispatch()

   const listOfAnimes = useSelector(
      ({
         persistedReducer: {
            storeAnimes: { listOfAnimes },
         },
         storeForm: {
            search: { name },
         },
      }) => {
         return listOfAnimes.filter(anime =>
            anime.title.toLowerCase().includes(name)
         )
      }
   )

   console.log(listOfAnimes)
   const renderedAnimes = listOfAnimes?.map((anime, index) => {
      return (
         <Box
            key={nanoid()}
            display='flex'
            alignItems='center'
         >
            <Typography color='red'>
               {index + 1}) {anime.title}
            </Typography>
            <Button>X</Button>
         </Box>
      )
   })
   const [value, setValue] = useState('')

   const handleChange = e => {
      console.log(e)
      const { value } = e.target
      setValue(value)
      dispatch(getSearchName(value))
   }

   return (
      <Box>
         <Box
            bgcolor='yellow'
            color='blue'
         >
            <TextField
               value={value}
               onChange={handleChange}
            />
            searchName / watching / finished / dropped
         </Box>
         {renderedAnimes}
         <Link to='/'>HOME</Link>
      </Box>
   )
}
export default UserList
