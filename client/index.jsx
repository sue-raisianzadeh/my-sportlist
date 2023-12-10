import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app')).render(<App />)

  // createRoot(document.getElementById('app') as HTMLElement).render(<App />)
})
