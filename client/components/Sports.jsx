import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { getAllSports } from '../api/apiClient'

const Sports = ({ search }) => {
  const [sports, setSports] = useState([])
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')

  useEffect(() => {
    getAllSports()
      .then((data) => {
        let filteredData = data
        if (category) {
          filteredData = data.filter((sport) => sport.strSport === category)
        }
        if (search) {
          filteredData = filteredData.filter((sport) =>
            sport.strSport.toLowerCase().includes(search.toLowerCase())
          )
        }
        setSports(filteredData)
      })
      .catch((error) => console.error('Error fetching sports:', error))
  }, [category, search])

  return (
    <div className="list__container">
      {sports.map((sport, index) => (
        <div key={index}>
          <h2>{sport.strSport}</h2>
          <img
            style={{ width: '82%', height: 'auto' }}
            src={sport.strSportThumb}
            alt={sport.strSport}
          />
          {/* <p>{sport.strSportDescription}</p> */}
          <Link
            className="view-detail-link"
            to={`/sports/${sport.idSport}`}
            state={{ sport: sport }}
          >
            View Detail
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Sports
