import { Box, Button, Divider } from '@mui/material'

function DropDown({ onEdit }) {
   const handleClick = val => {
      onEdit(val)
   }

   return (
      <Box>
         <Button
            onClick={() => handleClick('watching')}
            color='primary'
            variant='text'
            size='small'
         >
            Watching
         </Button>
         <Divider />
         <Button
            color='success'
            size='small'
            onClick={() => handleClick('finished')}
         >
            Finished
         </Button>
         <Divider />
         <Button
            color='warning'
            size='small'
            onClick={() => handleClick('onhold')}
         >
            OnHold
         </Button>
         <Divider />
         <Button
            size='small'
            color='error'
            onClick={() => handleClick('dropped')}
         >
            Dropped
         </Button>
      </Box>
   )
}
export default DropDown
