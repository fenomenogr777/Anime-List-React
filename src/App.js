import Header from './components/Header'
import { Box, Container } from '@mui/material'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SnackBar from './components/SnackBar'
// NEW
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import ListPage from './pages/ListPage'
import ContactUs from './pages/ContactUs'
import { useSelector } from 'react-redux'
import { Stack } from '@mui/system'

function App() {
   const { logged } = useSelector(({ storeForm }) => storeForm)

   const [isLogged, setIsLogged] = useState(true)

   // useEffect(() => {
   //    setIsLogged(logged)
   // }, [logged])

   const [openSnackbar, setOpenSnackbar] = useState(false)

   return (
      <Box>
         <Container maxWidth='xl'>
            <Box
               display='flex'
               flexDirection='column'
               justifyContent="space-between"
               // height='100vh'
            >
               {/* IF LOGIN SHOW HEADER  */}
               {!isLogged && (
                  <Box
                     display='flex'
                     justifyContent='center'
                     mt={10}
                  >
                     <LoginPage />
                  </Box>
               )}

               {isLogged && <Header />}

               {/* ROUTES */}
               {isLogged && (
                  <Routes>
                     <Route
                        exact
                        path='/'
                        element={<HomePage />}
                     />
                     <Route
                        exact
                        path='/search'
                        element={<SearchPage />}
                     />
                     <Route
                        exact
                        path='/list'
                        element={<ListPage />}
                     />
                     <Route
                        exact
                        path='/contactus'
                        element={<ContactUs />}
                     />
                  </Routes>
               )}

               <Footer />
            </Box>
         </Container>
      </Box>
   )
}

export default App
