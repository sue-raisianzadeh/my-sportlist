import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { SportProvider } from './components/contexts/SportContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SportProvider>
      <App />
    </SportProvider>
  </React.StrictMode>
)
