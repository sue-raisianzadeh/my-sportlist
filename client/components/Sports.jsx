import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Sports = ({ search, setApi }) => {
  const [sports, setSports] = useState([])

  useEffect(() => {
    setApi()
      .then((data) => setSports(data))
      .catch(console.error)
  }, [setApi])

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

Sports.propTypes = {
  search: PropTypes.string,
  setApi: PropTypes.func.isRequired,
}

export default Sports
