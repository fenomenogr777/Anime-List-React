import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const animesApi = createApi({
   reducerPAth: 'animes',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe' }),
   endpoints(builder) {
      return {
         fetchAnimes: builder.query({
            query: animeName => {
               return {
                  url: `v4/anime?q=${animeName}`,
                  method: 'GET',
               }
            },
         }),
      }
   },
})

export const { useFetchAnimesQuery } = animesApi
export { animesApi }
