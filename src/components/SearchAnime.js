import {
   Button,
   IconButton,
   InputAdornment,
   InputBase,
   TextField,
} from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getQuery } from '../store'
import SearchIcon from '@mui/icons-material/Search'

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
         />

         <Button
            startIcon={<SearchIcon />}
            variant='contained'
            size='small'
            color='secondary'
         >
            Search
         </Button>
      </form>
   )
}
export default SearchAnime
