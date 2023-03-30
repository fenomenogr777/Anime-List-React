import {
   AppBar,
   Box,
   Button,
   IconButton,
   Toolbar,
   Typography,
   useMediaQuery,
} from '@mui/material'

import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import themeMUI from './ThemeMUI'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { loginUser } from '../store'
import { useDispatch } from 'react-redux'

function Header() {
   const dispatch = useDispatch()
   const [isExpanded, setIsExpanded] = useState(false)
   const isMatch = useMediaQuery(themeMUI.breakpoints.up('sm'))

   useEffect(() => {
      const closeList = e => {
         // GUARD
         if (e.target.closest('.user-list-shortcut')) return

         setIsExpanded(false)
      }
      window.addEventListener('click', closeList, true)
      return () => window.removeEventListener('click', closeList, true)
   }, [])

   const handleMouseOverUserList = () => {
      setIsExpanded(true)
   }

   const closeShortcutList = () => {
      setIsExpanded(false)
   }

   return (
      <Box
         sx={{ marginBottom: '40px' }}
         position='relative'
      >
         <AppBar
            elevation={0}
            position='fixed'
            sx={{
               backgroundColor: '#4831d4',
               color: '#fff',
               // borderBottom: '1px solid #ccf381',
            }}
         >
            <Container maxWidth='lg'>
               <Toolbar
                  disableGutters
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  {/* TITLE */}
                  {isMatch && (
                     <Button
                        component={Link}
                        to='/'
                     >
                        <Typography
                           variant='h4'
                           color='primary'
                        >
                           ANIMIFEY
                        </Typography>
                     </Button>
                  )}

                  {/* LISTS */}
                  <Box display='flex'>
                     {/* <SearchBar /> */}
                     <Button
                        component={Link}
                        to='/'
                     >
                        HOME
                     </Button>
                     <Button
                        component={Link}
                        to='/search'
                     >
                        Search
                     </Button>

                     <Button
                        component={Link}
                        to='/list'
                     >
                        LIST
                     </Button>
                     <Button
                     variant='contained'
                        component={Link}
                        to='/subscribe'
                     >
                        Subscribe
                     </Button>
                  </Box>

                  {/* ICON */}

                  <IconButton
                     color='primary'
                     onClick={() => {
                        dispatch(loginUser(false))
                     }}
                  >
                     <AccountCircleIcon fontSize='large' />
                  </IconButton>
               </Toolbar>
            </Container>
         </AppBar>
         <Toolbar />
      </Box>
   )
}
export default Header
