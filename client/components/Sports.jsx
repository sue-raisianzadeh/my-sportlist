import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSportsByCategory, getPopularSports } from '../api/apiClient'

const Sports = (props) => {
  const [sportList, setSportList] = useState([])
  const { categoryID } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data
        if (categoryID) {
          data = await getSportsByCategory(categoryID)
        } else {
          data = await getPopularSports()
        }
        setSportList(data)
      } catch (error) {
        console.error('Error fetching sports:', error)
      }
    }

    fetchData()
  }, [categoryID])

  return (
    <div className="list__container">
      {sportList.map((sport, i) => (
        <div key={i}>
          <h1>{sport.strSport}</h1>
          <p>{sport.strSportDescription}</p>
          <img src={sport.strSportThumb} alt={sport.strSport} />
          <Link to={`/sports/${sport.idSport}`}>View Detail</Link>
        </div>
      ))}
    </div>
  )
}

export default Sports
