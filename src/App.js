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
            {/* IF LOGIN SHOW HEADER  */}
            {!isLogged && <LoginPage />}
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
           
         </Container>
      </Box>
   )
}

export default App
