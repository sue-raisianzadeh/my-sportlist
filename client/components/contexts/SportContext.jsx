// SportContext.js
import { createContext, useState } from 'react'

export const SportContext = createContext()

export const SportProvider = ({ children }) => {
  const [sports, setSports] = useState([])

  return (
    <SportContext.Provider value={{ sports, setSports }}>
      {children}
    </SportContext.Provider>
  )
}
