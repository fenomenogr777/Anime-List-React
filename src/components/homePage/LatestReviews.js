import {
   Avatar,
   Box,
   Card,
   CardContent,
   CardHeader,
   Typography,
} from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'

function LatestReviews({ reviewsAnimes }) {
   console.log(reviewsAnimes)

   const renderedReviews = reviewsAnimes?.data?.map((review, index) => {
      if (index > 4) return ''
      return (
         <Card
            key={nanoid()}
            sx={{ mb: '5px', maxWidth: '300px', backgroundColor: '#9183e5' }}
         >
            <CardHeader
               title={review.user.username}
               subheader={review?.date.split('T')[0]}
               avatar={<Avatar src={review.user.images.jpg.image_url} />}
            />
            <CardContent
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
               }}
            >
               <Typography>''{review?.review.slice(0, 50)}''</Typography>
            </CardContent>
            <Typography fontWeight={600}>{review?.entry.title}</Typography>
         </Card>
      )
   })

   return (
      <Box
         display='flex'
         gap={1}
      >
         {renderedReviews}
      </Box>
   )
}
export default LatestReviews
