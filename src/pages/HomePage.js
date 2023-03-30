import { Box, Typography } from '@mui/material'

import TopAnimesCard from '../components/homepage/TopAnimesCard'
import LatestReviews from '../components/homepage/LatestReviews'
import RecentEpisodes from '../components/homepage/RecentEpisodes'
import FavouriteCharacters from '../components/homepage/FavouriteCharacters'

import { useFetchTopAnimesQuery } from '../store/apis/animesApi'
import { useFetchRecentEpisodesQuery } from '../store/apis/animesApi'
import { useFetchReviewsAnimesQuery } from '../store/apis/animesApi'
import { useFetchTopCharactersQuery } from '../store/apis/animesApi'

function HomePage() {
   const { data: topAnimes } = useFetchTopAnimesQuery()
   const { data: reviewsAnimes } = useFetchReviewsAnimesQuery()
   const { data: recentEpisodes } = useFetchRecentEpisodesQuery()
   const { data: favouriteCharacters } = useFetchTopCharactersQuery()

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
      </Box>
   )
}
export default HomePage
