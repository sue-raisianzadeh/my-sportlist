// client/components/SportDetails.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSportDetailsById } from '../api/apiClient'

const SportDetails = () => {
  const { id } = useParams()
  const [sport, setSport] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getSportDetailsById(id)
      .then((data) => {
        setSport(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching sport details:', err)
        setError('Failed to fetch sport details.')
        setLoading(false)
      })
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!sport) return <div>No sport details available.</div>

  return (
    <div className="sport-details">
      <h2>{sport.strSport}</h2>
      <p>{sport.strSportDescription}</p>
      {/* Display other sport details as needed */}
    </div>
  )
}

export default SportDetails
