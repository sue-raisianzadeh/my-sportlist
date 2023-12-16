import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSportsByCategory, getAllSports } from '../api/apiClient'

const Sports = ({ search }) => {
  const [sports, setSports] = useState([])
  const { id: categoryId } = useParams()

  useEffect(() => {
    const fetchSports = async () => {
      try {
        let sportsData = categoryId
          ? await getSportsByCategory(categoryId)
          : await getAllSports()
        setSports(sportsData)
      } catch (error) {
        console.error('Error fetching sports:', error)
      }
    }
    fetchSports()
  }, [categoryId, search])

  return (
    <div className="list__container">
      {sports.map((sport, index) => (
        <div key={index}>
          <h1>{sport.strSport}</h1>
          <p>{sport.strSportDescription}</p>
          <img src={sport.strSportThumb} alt={sport.strSport} />
          <Link to={`/sport/${sport.idSport}`}>View Detail</Link>
        </div>
      ))}
    </div>
  )
}

export default Sports
