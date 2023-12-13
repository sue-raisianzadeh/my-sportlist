// client/components/SportsList.jsx
import React, { useState, useEffect } from 'react'
import { selectRandomSports } from '../utilities/utility'
import { ContentRepository } from './ContentRepository'

const SportsList = () => {
  const [sports, setSports] = useState([])

  useEffect(() => {
    const fetchSports = async () => {
      const allSports = await ContentRepository.getFeaturedSports()
      setSports(selectRandomSports(allSports, 3))
    }
    fetchSports()
  }, [])

  const refreshSports = () => {
    fetchSports()
  }

  return (
    <div className="list__container">
      {sports.map((sport, index) => (
        <div key={index} className="sport-item">
          <h2>{sport.name}</h2>
          <p>{sport.description}</p>
        </div>
      ))}
      <button onClick={refreshSports}>Refresh Sports</button>
    </div>
  )
}

export default SportsList
