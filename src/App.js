import AnimeList from './components/AnimeList'
import SearchAnime from './components/SearchAnime'
import Header from './components/Header'
import { Box, Container } from '@mui/material'
import Footer from './components/Footer'
import { Link, Route, Routes } from 'react-router-dom'
import UserList from './components/UserList'

function App() {
   return (
      <Box>
         <Container maxWidth='xl'>
            <Header />

            <Routes>
               <Route
                  exact
                  path='/'
                  element={<AnimeList />}
               />
               <Route
                  exact
                  path='/userList'
                  element={<UserList />}
               />
            </Routes>
            
            <Footer />
         </Container>
      </Box>
   )
}

export default App
