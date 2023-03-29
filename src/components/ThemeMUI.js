import { createTheme } from '@mui/material'
const themeMUI = createTheme({
   palette: {
      primary: {
         main: '#ccf381',
         light: '#9183e5',
      },
      secondary: {
         main: '#5a46d8',
      },
   },
})

console.log(themeMUI)

export default themeMUI
