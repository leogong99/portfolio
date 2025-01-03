import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Global } from '@emotion/react'
import { globalStyles } from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
) 