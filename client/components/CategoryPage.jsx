import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllSports } from '../api/apiClient'

const CategoryPage = () => {
  const { category } = useParams()
  const [sports, setSports] = useState([])

  useEffect(() => {
    getAllSports()
      .then((data) => {
        const filteredSports = data.filter(
          (sport) => sport.strSport === category
        )
        setSports(filteredSports)
      })
      .catch(console.error)
  }, [category])

  return (
    <div className="list__container">
      {sports.map((sport, index) => (
        <div key={index}>{/* Display sport details */}</div>
      ))}
    </div>
  )
}

export default CategoryPage
