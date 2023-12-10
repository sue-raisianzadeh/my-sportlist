// SportList.jsx
import React, { useContext } from 'react'
import Sport from './Sport'
import { SportContext } from './contexts/SportContext'

const SportsList = () => {
  const { sports } = useContext(SportContext)

  return (
    <div className="sports-list">
      {sports.map((sport) => (
        <Sport key={sport.name} {...sport} />
      ))}
    </div>
  )
}

export default SportsList
