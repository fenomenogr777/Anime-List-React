import { CircularProgress, Snackbar } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { useFetchAnimesQuery } from '../../store/apis/animesApi'
import AnimeCard from '../AnimeCard'

function FetchData({ snackbar }) {
   const { query } = useSelector(({ storeForm }) => storeForm)

   const { data, error, isLoading } = useFetchAnimesQuery(query)

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
               snackbar={snackbar}
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
