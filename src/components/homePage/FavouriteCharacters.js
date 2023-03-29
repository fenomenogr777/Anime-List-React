import {
   Box,
   Card,
   CardActionArea,
   CardContent,
   CardMedia,
   Typography,
} from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'

function TopAnimesCard({ favouriteCharacters }) {
   const renderedFavouriteCharacters = favouriteCharacters?.data?.map(
      (anime, index) => {
         if (index > 4) return ''
         return (
            <Card
               key={nanoid()}
               sx={{
                  backgroundColor: '#9183e5',
                  maxWidth: '300px',
                  marginBottom: '5px',
               }}
            >
               <CardActionArea
                  sx={{
                     display: 'flex',
                     alignItems: 'flex-start',
                     justifyContent: 'start',
                  }}
               >
                  <CardMedia
                     component='img'
                     image={anime?.images.jpg.image_url}
                     sx={{ width: '70px', height: '98px' }}
                  />
                  <CardContent>
                     <Typography>{anime.name}</Typography>
                  </CardContent>
               </CardActionArea>
            </Card>
         )
      }
   )

   return <Box>{renderedFavouriteCharacters}</Box>
}
export default TopAnimesCard
