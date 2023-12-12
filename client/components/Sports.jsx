import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContentRepository } from '../api/ContentRepository'
import PropTypes from 'prop-types'

const Sports = ({ search }) => {
  const [sports, setSports] = useState([])

  useEffect(() => {
    ContentRepository.getFeaturedSports()
      .then((sportsData) => {
        setSports(sportsData)
      })
      .catch(console.error)
  }, [])

  const filteredSports = search
    ? sports.filter((sport) =>
        sport.name.toLowerCase().includes(search.toLowerCase())
      )
    : sports

  return (
    <div className="list__container">
      {filteredSports.map((sport, index) => (
        <div key={index}>
          <h1>{sport.name}</h1>
          <h3>⭐Description: {sport.description}</h3>
          <img src={sport.imageUrl} alt={sport.name} />
          <Link to={`/sport/${sport.id}`}>View Detail</Link>
        </div>
      ))}
      {filteredSports.length === 0 && (
        <p>No sports found matching the search criteria.</p>
      )}
    </div>
  )
}

Sports.propTypes = {
  search: PropTypes.string,
}

export default Sports
