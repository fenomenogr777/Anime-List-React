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
               LinkComponent='a'
               href={anime.entry.url}
               target='e_blank'
               sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'start',
               }}
            >
               <CardMedia
                  component='img'
                  image={anime?.entry.images.jpg.image_url}
                  sx={{ width: '70px', height: '98px' }}
               />
               <CardContent>
                  <Typography>{anime.entry.title.slice(0, 40)}</Typography>
               </CardContent>
            </CardActionArea>
         </Card>
      )
   })

   return <Box>{renderedRecentEpisodes}</Box>
}
export default RecentEpisodes
