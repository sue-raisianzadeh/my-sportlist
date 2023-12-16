import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSportsByCategory } from '../../api/apiClient'

const CategoryComponent = () => {
  const [sports, setSports] = useState([])
  const { categoryID } = useParams()

  useEffect(() => {
    const fetchSportsByCategory = async () => {
      try {
        const sportsData = await getSportsByCategory(categoryID)
        setSports(sportsData)
      } catch (error) {
        console.error('Error fetching sports by category:', error)
      }
    }

    if (categoryID) {
      fetchSportsByCategory()
    }
  }, [categoryID])

  return (
    <div>
      {/* Render sports list here */}
      {sports.map((sport, index) => (
        <div key={index}>
          <h3>{sport.strSport}</h3>
          {/* Other details */}
        </div>
      ))}
    </div>
  )
}

export default CategoryComponent
