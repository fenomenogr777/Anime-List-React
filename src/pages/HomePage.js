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
   const {
      data: topAnimes,
      error: topAnimesError,
      isLoading: topAnimesIsLoading,
   } = useFetchTopAnimesQuery()
   const {
      data: reviewsAnimes,
      error: reviewsAnimesError,
      isLoading: reviewsAnimesIsLoading,
   } = useFetchReviewsAnimesQuery()
   const {
      data: recentEpisodes,
      error: recentEpisodesError,
      isLoading: recentEpisodesIsLoading,
   } = useFetchRecentEpisodesQuery()
   const {
      data: favouriteCharacters,
      error: favouriteCharactersError,
      isLoading: favouriteCharactersIsLoading,
   } = useFetchTopCharactersQuery()

   console.log(recentEpisodes)

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
               <FavouriteCharacters
                  favouriteCharacters={favouriteCharacters}
                  favouriteCharactersError={favouriteCharactersError}
                  favouriteCharactersIsLoading={favouriteCharactersIsLoading}
               />
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
