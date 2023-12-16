import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSportsByCategory } from '../../api/apiClient' // Use your existing API function

const CategoryPage = () => {
  const { id } = useParams()
  const [categoryData, setCategoryData] = useState([])

  useEffect(() => {
    getSportsByCategory(id)
      .then((data) => setCategoryData(data))
      .catch((error) => console.error(error))
  }, [id])

  // Render category data
  return (
    <div>
      {categoryData.map((sport, index) => (
        <div key={index}>
          <h2>{sport.strSport}</h2>
          <p>{sport.strSportDescription}</p>
          <img src={sport.strSportThumb} alt={sport.strSport} />
          <Link to={`/sports/${sport.idSport}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default CategoryPage
