import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllSports, getSportsByCategory } from '../api/apiClient'

const Sports = ({ search }) => {
  const [sports, setSports] = useState([])
  const { categoryId } = useParams() // Extracting categoryId from URL

  useEffect(() => {
    const fetchSports = async () => {
      try {
        let sportsData
        if (categoryId) {
          sportsData = await getSportsByCategory(categoryId) // Fetch sports by category
        } else {
          sportsData = await getAllSports() // Fetch all sports
        }
        setSports(sportsData)
      } catch (error) {
        console.error('Error fetching sports:', error)
      }
    }

    fetchSports()
  }, [categoryId])

  const filteredSports = sports.filter((sport) =>
    sport.strSport.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="list__container">
      {filteredSports.map((sport, i) => (
        <div key={i}>
          <h1>{sport.strSport}</h1>
          <img
            style={{ width: 'auto', height: 'auto' }}
            src={sport.strSportThumb}
            alt={sport.strSport}
          />
          <p>{sport.strSportDescription}</p>
          {/* Link to detail page */}
        </div>
      ))}
    </div>
  )
}

export default Sports
