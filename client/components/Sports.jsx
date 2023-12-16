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
          // Filter sports based on the category
          filteredData = data.filter((sport) => sport.strSport === category)
        }
        if (search) {
          // Further filter sports based on the search input
          filteredData = filteredData.filter((sport) =>
            sport.strSport.toLowerCase().includes(search.toLowerCase())
          )
        }
        setSports(filteredData)
      })
      .catch((error) => {
        console.error('Error fetching sports:', error)
      })
  }, [category, search])

  return (
    <div className="list__container">
      {sports.map((sport, index) => (
        <div key={index}>
          <h2>{sport.strSport}</h2>
          <img
            style={{ width: 'auto', height: 'auto' }}
            src={sport.strSportThumb}
            alt={sport.strSport}
          />
          <p
            style={{
              fontSize: '15px',
              fontFamily: 'Corio',
              lineHeight: '2.25rem',
              textAlign: 'justify',
              padding: '10px',
            }}
          >
            {sport.strSportDescription}
          </p>
          <Link to={`/sports/${sport.idSport}`}>View Detail</Link>
        </div>
      ))}
    </div>
  )
}

export default Sports
