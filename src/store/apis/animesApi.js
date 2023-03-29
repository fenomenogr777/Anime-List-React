import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const animesApi = createApi({
   reducerPath: 'animes',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe' }),
   endpoints(builder) {
      return {
         // ANIMES
         fetchAnimes: builder.query({
            query: animeName => {
               return {
                  url: `v4/anime?q=${animeName}`,
                  method: 'GET',
               }
            },
         }),

         // TOP ANIMES
         fetchTopAnimes: builder.query({
            query: () => {
               return {
                  url: 'v4/top/anime',
                  method: 'GET',
               }
            },
         }),

         // RECENT EPISODES
         fetchRecentEpisodes: builder.query({
            query: () => {
               return {
                  url: 'v4/watch/episodes',
                  method: 'GET',
               }
            },
         }),
         // USER REVIEWS
         fetchReviewsAnimes: builder.query({
            query: () => {
               return {
                  url: 'v4/reviews/anime',
                  method: 'GET',
               }
            },
         }),
      }
   },
})

export const {
   useFetchAnimesQuery,
   useFetchTopAnimesQuery,
   useFetchRecentEpisodesQuery,
   useFetchReviewsAnimesQuery,
} = animesApi
export { animesApi }
