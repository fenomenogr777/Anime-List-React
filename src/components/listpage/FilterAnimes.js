import { Button, InputAdornment, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch } from 'react-redux'
import { deleteAllAnimeList, getSearchName, getStatus } from '../../store'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

function FilterAnimes({ listOfAnimes }) {
   const dispatch = useDispatch()
   const [value, setValue] = useState('')
   const handleChange = e => {
      console.log(e)
      const { value } = e.target
      setValue(value)
      dispatch(getSearchName(value.toLowerCase()))
   }

   return (
      <>
         <Typography
            variant='h5'
            color='#fff'
         >
            Filter
         </Typography>

         <Box display='flex'>
            <TextField
               sx={{
                  padding: '0',
                  backgroundColor: '#3a27aa',
                  border: '1px solid #ccf381',
               }}
               placeholder='Search...'
               size='small'
               value={value}
               onChange={handleChange}
               variant='outlined'
               InputProps={{
                  startAdornment: (
                     <InputAdornment position='start'>
                        <SearchIcon color='primary' />
                     </InputAdornment>
                  ),
               }}
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
      </>
   )
}
export default FilterAnimes
