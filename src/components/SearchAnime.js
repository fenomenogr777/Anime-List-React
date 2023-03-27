import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getQuery } from '../store'

function SearchAnime() {
   const [animeName, setAnimeName] = useState('')

   const dispatch = useDispatch()

   const handleChange = e => {
      const { value } = e.target
      setAnimeName(value)
   }

   const handleSubmit = e => {
      e.preventDefault()
      dispatch(getQuery(animeName))
      setAnimeName('')
   }

   return (
      <form
         onSubmit={handleSubmit}
         style={{ display: 'flex' }}
      >
         <TextField
            placeholder='search name'
            size='small'
            value={animeName}
            onChange={handleChange}
            sx={{ backgroundColor: 'white' }}
         />
         <Button
            variant='contained'
            size='small'
            color='secondary'
         >
            Search Anime
         </Button>
      </form>
   )
}
export default SearchAnime
