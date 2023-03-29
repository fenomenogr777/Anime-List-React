import { Box, Button } from '@mui/material'

function DropDown({ onEdit }) {
   const handleClick = val => {
      onEdit(val)
   }

   return (
      <Box>
         <Button onClick={() => handleClick('watching')}>Watching</Button>
         <Button onClick={() => handleClick('finished')}>Finished</Button>
         <Button onClick={() => handleClick('onhold')}>OnHold</Button>
         <Button onClick={() => handleClick('dropped')}>Dropped</Button>
      </Box>
   )
}
export default DropDown
