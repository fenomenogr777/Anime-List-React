import { CircularProgress } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'

import AnimeCard from './AnimeCard'
import { useSelector } from 'react-redux'

function FetchData({ data, error, isLoading }) {
   const { score } = useSelector(
      ({ storeForm: { searchPageFilter } }) => searchPageFilter
   )
   console.log(score)
   console.log(data)
   let content

   if (isLoading) {
      content = <CircularProgress />
   } else if (error) {
      content = 'ERROR FETCHING'
   } else if (data) {
      content = data?.data.map(anime => {
         return (
            <AnimeCard
               key={nanoid()}
               anime={anime}
            />
         )
      })
   }

   console.log(content)

   return content
}
export default FetchData
