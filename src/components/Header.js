import {
   AppBar,
   Box,
   IconButton,
   TextField,
   Toolbar,
   Typography,
} from '@mui/material'
import SearchAnime from './SearchAnime'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import { Container } from '@mui/system'
import { useEffect, useState } from 'react'
import UserFavouriteList from './UserFavouriteList'

import { Link } from 'react-router-dom'

function Header({ Link }) {
   const [isExpanded, setIsExpanded] = useState(false)

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
   const handleOpenUserList = () => {}

   const closeShortcutList = () => {
      setIsExpanded(false)
   }

   return (
      <Box
         sx={{ marginBottom: '40px' }}
         position='relative'
      >
         <AppBar position='fixed'>
            <Container maxWidth='xl'>
               <Toolbar
                  sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Typography variant='h6'>ANIMIFEY</Typography>
                  <SearchAnime />
                  <Box position='relative'>
                     {/* <Link to='/test'>TEST</Link> */}
                     <IconButton
                        color='secondary'
                        onMouseOver={handleMouseOverUserList}
                        onClick={handleOpenUserList}
                     >
                        <ReceiptLongIcon />
                     </IconButton>

                     {isExpanded && (
                        <Box
                           className='user-list-shortcut'
                           position='absolute'
                           left='-750%'
                        >
                           <UserFavouriteList onClose={closeShortcutList} />
                        </Box>
                     )}
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>
         <Toolbar />
      </Box>
   )
}
export default Header
