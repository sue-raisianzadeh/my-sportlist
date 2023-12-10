// SportComponent.jsx
import React, { useState, useEffect } from 'react'
import { ContentRepository } from './components/ContentRepository'

const SportComponent = () => {
  const [sports, setSports] = useState([])

  const refreshSports = async () => {
    const contentRepo = new ContentRepository()
    const featuredSports = await contentRepo.getFeaturedSports()
    setSports(featuredSports)
  }

  useEffect(() => {
    refreshSports()
  }, []) // Run once on component mount

  return (
    <div>
      <h2>Sports List</h2>
      <ul>
        {sports.map((sport) => (
          <li key={sport.name}>
            <strong>{sport.name}</strong>: {sport.description}
          </li>
        ))}
      </ul>
      <button onClick={refreshSports}>Refresh</button>
    </div>
  )
}

export default SportComponent
