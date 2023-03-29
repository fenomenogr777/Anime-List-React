import {
   Box,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
} from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'

function RecentEpisodes({ recentEpisodes }) {
   console.log(recentEpisodes)
   const renderedRecentEpisodes = recentEpisodes?.data?.map((anime, index) => {
      if (index > 5) return ''
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
                  image={anime?.entry.images.jpg.image_url}
                  sx={{ width: '70px', height: 'auto' }}
               />
               <CardContent>
                  <Typography>{anime.entry.title}</Typography>
               </CardContent>
            </CardActionArea>
         </Card>
      )
   })

   return <Box>{renderedRecentEpisodes}</Box>
}
export default RecentEpisodes
