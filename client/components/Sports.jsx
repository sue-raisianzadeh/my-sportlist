// client/components/Sports.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllSports } from '../api/apiClient'

const Sports = ({ search }) => {
  const [sports, setSports] = useState([])

  useEffect(() => {
    getAllSports()
      .then((data) => setSports(data))
      .catch(console.error)
  }, [])

  // Filter sports based on search query
  const filteredSports = sports.filter((sport) =>
    sport.strSport.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="list__container">
      {filteredSports.map((sport, index) => (
        <div key={index}>
          <h1>{sport.strSport}</h1>
          <p>{sport.strSportDescription}</p>
          <img src={sport.strSportThumb} alt={sport.strSport} />
          <Link to={`/sports/${sport.idSport}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default Sports
