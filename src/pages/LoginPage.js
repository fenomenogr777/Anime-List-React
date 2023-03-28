import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store'

function LoginPage() {
   const dispatch = useDispatch()

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
      console.log(value)

      if (value.username === 'nikos' && value.password === '1111') {
         console.log('LOG IN...')
         dispatch(loginUser(true))
      }
      setValue({
         username: '',
         password: '',
      })
   }

   return (
      <Box
         textAlign='center'
         display='flex'
         flexDirection='column'
      >
         <Typography>(username=nikos,password:1111)</Typography>
         <form
            onSubmit={handleUserLogin}
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <TextField
               name='username'
               label='Username'
               size='small'
               value={value.username}
               onChange={handleChange}
            />
            <TextField
               name='password'
               label='Password'
               type='password'
               size='small'
               value={value.password}
               onChange={handleChange}
            />
            <Button
               variant='contained'
               type='submit'
               sx={{ width: 'auto' }}
            >
               LOGIN
            </Button>
         </form>
      </Box>
   )
}
export default LoginPage
