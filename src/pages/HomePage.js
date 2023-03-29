import { Box, Typography } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import TopAnimesCard from '../components/homePage/TopAnimesCard'
import LatestReviews from '../components/homePage/LatestReviews'
import RecentEpisodes from '../components/homePage/RecentEpisodes'

import { useFetchTopAnimesQuery } from '../store/apis/animesApi'
import { useFetchRecentEpisodesQuery } from '../store/apis/animesApi'
import { useFetchReviewsAnimesQuery } from '../store/apis/animesApi'

function HomePage() {
   const { data: topAnimes } = useFetchTopAnimesQuery()
   const { data: reviewsAnimes } = useFetchReviewsAnimesQuery()

   const { data: recentEpisodes } = useFetchRecentEpisodesQuery()
   console.log(recentEpisodes)

   return (
      <Box>
         <Box
            display='flex'
            gap={10}
         >
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

            <Box>
               <Typography
                  variant='h5'
                  color='white'
                  fontWeight={600}
               >
                  RECENT EPISODES{' '}
               </Typography>
               <RecentEpisodes recentEpisodes={recentEpisodes} />
            </Box>
         </Box>

         <Typography variant='h6'>1) What's Animifey?</Typography>
         <Typography variant='p'>
            Animifey is a website you can searsch your favourite animes and
            organize them on lists based on many criterias
         </Typography>
         <Typography variant='h6'>2) Whhjjjhgj?</Typography>
         <Typography variant='p'>lorem</Typography>
         <Typography variant='h6'>3) Whfsdfdsfsdf?</Typography>
         <Typography variant='p'>kjghjgh</Typography>
      </Box>
   )
}
export default HomePage
