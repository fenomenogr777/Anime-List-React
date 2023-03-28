import { Alert, Box, Snackbar } from '@mui/material'
import ReactDOM from 'react-dom'

function SnackBar({ children, autoHideTime, open, onClose }) {
   return ReactDOM.createPortal(
      <Box>
         <Snackbar
            open={open}
            autoHideDuration={autoHideTime}
            onClose={onClose}
         >
            <Alert
               onClose={onClose}
               severity='success'
               sx={{ width: '100%' }}
               variant='filled'
            >
               {children}
            </Alert>
         </Snackbar>
      </Box>,
      document.querySelector('.snackbar')
   )
}
export default SnackBar
