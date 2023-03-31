import {
   Button,
   FormControl,
   InputAdornment,
   InputLabel,
   MenuItem,
   Select,
   TextField,
   Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch } from 'react-redux'
import { deleteAllAnimeList, getSearchName, getStatus } from '../../store'
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from 'react'

function FilterAnimes({ listOfAnimes }) {
   const dispatch = useDispatch()

   const [value, setValue] = useState({
      name: '',
      score: '',
      status: '',
   })

   const handleChange = e => {
      setValue({ ...value, [e.target.name]: e.target.value })
   }

   useEffect(() => {
      dispatch(getSearchName(value))
   }, [value, dispatch])

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
               name='name'
               sx={{
                  padding: '0',
                  backgroundColor: '#3a27aa',
                  border: '1px solid #ccf381',
               }}
               placeholder='Search...'
               size='small'
               value={value.name}
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

         <Box display='flex'>
            <FormControl
               sx={{ minWidth: '90px' }}
               size='small'
            >
               <InputLabel>Score</InputLabel>
               <Select
                  value={value.score}
                  label='Score'
                  onChange={handleChange}
                  name='score'
               >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
               </Select>
            </FormControl>
            <Button
               variant='contained'
               onClick={() => setValue({ name: '', score: '', status: '' })}
            >
               clear
            </Button>
         </Box>
         <Box>
            <Typography>LIST ({listOfAnimes.length} Items)</Typography>
            <Box>
               <Button
                  size='small'
                  sx={{ justifyContent: 'right' }}
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
