import { Box, Typography } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import TopAnimesCard from '../components/homePage/TopAnimesCard'
import LatestReviews from '../components/homePage/LatestReviews'
import RecentEpisodes from '../components/homePage/RecentEpisodes'
import FavouriteCharacters from '../components/homePage/FavouriteCharacters'

import { useFetchTopAnimesQuery } from '../store/apis/animesApi'
import { useFetchRecentEpisodesQuery } from '../store/apis/animesApi'
import { useFetchReviewsAnimesQuery } from '../store/apis/animesApi'
import { useFetchTopCharactersQuery } from '../store/apis/animesApi'

function HomePage() {
   const { data: topAnimes } = useFetchTopAnimesQuery()
   const { data: reviewsAnimes } = useFetchReviewsAnimesQuery()
   const { data: recentEpisodes } = useFetchRecentEpisodesQuery()
   const { data: favouriteCharacters } = useFetchTopCharactersQuery()
   console.log(favouriteCharacters)

   return (
      <Box>
         <Box
            display='flex'
            justifyContent='center'
            gap={10}
         >
            {/* TOP RATED ANIMES */}
            <Box>
               <Typography
                  variant='h5'
                  color='white'
                  fontWeight={600}
               >
                  TOP RATED ANIMES
               </Typography>
               <TopAnimesCard topAnimes={topAnimes} />
            </Box>
            {/* MOST FAVOURITE CHARACTERS*/}
            <Box>
               <Typography
                  variant='h5'
                  color='white'
                  fontWeight={600}
               >
                  TOP CHARACTERS
               </Typography>
               <FavouriteCharacters favouriteCharacters={favouriteCharacters} />
            </Box>
            {/* recent episodes */}
            <Box>
               <Typography
                  variant='h5'
                  color='white'
                  fontWeight={600}
               >
                  RECENT EPISODES
               </Typography>
               <RecentEpisodes recentEpisodes={recentEpisodes} />
            </Box>
         </Box>

         {/* USER REVIEWS */}
         <Box>
            <Typography
               variant='h5'
               color='white'
               fontWeight={600}
            >
               LATEST REVIEWS
            </Typography>
            <LatestReviews reviewsAnimes={reviewsAnimes} />
         </Box>

         {/* Q&A */}
         {/* <Box textAlign='center'>
            <Typography
               variant='h6'
               color='white'
            >
               1) What's Animifey?
            </Typography>
            <Typography variant='p'>
               Animifey is a website you can searsch your favourite animes and
               organize them on lists based on many criterias
            </Typography>
            <Typography
               variant='h6'
               color='white'
            >
               2) Is Animifey free?
            </Typography>
            <Typography variant='p'>Yes,its completely free for use</Typography>
         </Box> */}
      </Box>
   )
}
export default HomePage
