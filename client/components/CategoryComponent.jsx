import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSportsByCategory } from '../api/apiClient'

const CategoryComponent = () => {
  const { categoryId } = useParams()
  const [sports, setSports] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getSportsByCategory(categoryId)
      .then((sportsData) => {
        setSports(sportsData) // Update with the format returned by API
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching sports data:', err)
        setError('Failed to fetch sports data.')
        setLoading(false)
      })
  }, [categoryId])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h2>Category: {categoryId}</h2>
      <div className="sports-list">
        {sports.map((sport, index) => (
          <div key={index}>
            <h3>{sport.name}</h3>
            <p>{sport.description}</p>
            {/* Add more sport details as needed */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryComponent
