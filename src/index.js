import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// REDUX
import { store } from './store'
import { Provider } from 'react-redux'

// ROUTER
import { BrowserRouter } from 'react-router-dom'

// REDUX PERSIST
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

// MUI THEME
import themeMUI from './components/ThemeMUI'
import { ThemeProvider } from '@emotion/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
let persistor = persistStore(store)

root.render(
   <Provider store={store}>
      <PersistGate persistor={persistor}>
         <BrowserRouter>
            <ThemeProvider theme={themeMUI}>
               <App />
            </ThemeProvider>
         </BrowserRouter>
      </PersistGate>
   </Provider>
)
