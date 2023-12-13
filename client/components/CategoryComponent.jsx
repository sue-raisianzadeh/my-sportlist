import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSportByCategory } from '../api/apiClient'

const CategoryComponent = () => {
  const { categoryName } = useParams()
  const [sports, setSports] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getSportByCategory(categoryName)
      .then((data) => {
        setSports(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Failed to fetch sports data.')
        setLoading(false)
      })
  }, [categoryName])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <h2>Category: {categoryName}</h2>
      <div className="sports-list">
        {sports.map((sport, index) => (
          <div key={index}>
            <h3>{sport.name}</h3>
            <p>{sport.description}</p>
            <p>{sport.celebrityPlayers}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryComponent
