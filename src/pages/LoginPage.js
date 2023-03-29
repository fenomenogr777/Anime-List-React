import { Alert, Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../store'

function LoginPage() {
   const dispatch = useDispatch()

   // checks if login data is correct or wrong to display error
   const [wrongData, setWrongData] = useState(false)

   const [value, setValue] = useState({
      username: '',
      password: '',
   })

   const handleChange = e => {
      const { value: userVal, name } = e.target
      setValue({
         ...value,
         [name]: userVal,
      })
   }

   const handleUserLogin = e => {
      e.preventDefault()
      if (value.username === 'nikos' && value.password === '1111') {
         dispatch(loginUser(true))
      } else {
         setWrongData(true)
      }
      setValue({
         username: '',
         password: '',
      })
   }

   return (
      <Box mt={5}>
         <Box
            position='relative'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            bgcolor='#9183e5'
            padding='20px 30px'
            borderRadius={3}
         >
            {wrongData && (
               <Alert
                  sx={{
                     position: 'absolute',
                     top: '0',
                     transform: 'translate(0,-100%)',
                  }}
                  variant='filled'
                  severity='error'
               >
                  Wrong Password!
                  <Button onClick={() => setWrongData(false)}>close</Button>
               </Alert>
            )}
            <Typography variant='h6'>LOGIN</Typography>
            <form
               onSubmit={handleUserLogin}
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '5px',
               }}
            >
               <TextField
                  variant='standard'
                  name='username'
                  label='Username'
                  size='small'
                  value={value.username}
                  onChange={handleChange}
               />
               <TextField
                  variant='standard'
                  name='password'
                  label='Password'
                  type='password'
                  size='small'
                  value={value.password}
                  onChange={handleChange}
               />
               <Typography
                  mt={2}
                  mb={1}
                  component={Link}
                  variant='caption'
                  display='inline-block'
                  alignSelf='flex-start'
                  color='rgba(0, 0, 0, 0.87)'
                  sx={{ textDecoration: 'none' }}
               >
                  Forgot Password?
               </Typography>
               <Button
                  fullWidth
                  variant='contained'
                  type='submit'
               >
                  LOGIN
               </Button>
               <Typography
                  mt={2}
                  variant='body2'
                  sx={{ textDecoration: 'none' }}
               >
                  Not a member?Signup
               </Typography>
            </form>
         </Box>
      </Box>
   )
}
export default LoginPage
