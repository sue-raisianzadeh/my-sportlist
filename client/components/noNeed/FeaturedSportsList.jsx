import React, { useState, useEffect } from 'react'
import { ContentRepository } from './ContentRepository'

const FeaturedSportsList = () => {
  const [featuredSports, setFeaturedSports] = useState([])

  const fetchFeaturedSports = async () => {
    try {
      const sports = await ContentRepository.getFeaturedSports()
      setFeaturedSports(sports)
    } catch (error) {
      console.error('Error fetching featured sports:', error)
    }
  }

  useEffect(() => {
    fetchFeaturedSports()
  }, [])

  const handleRefresh = () => {
    fetchFeaturedSports()
  }

  return (
    <div>
      <h2>Featured Sports</h2>
      <ul>
        {featuredSports.map((sport) => (
          <li key={sport.name}>
            <strong>{sport.name}</strong>: {sport.description}
          </li>
        ))}
      </ul>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  )
}

export default FeaturedSportsList
