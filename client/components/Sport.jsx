// client/components/Sport.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTeamDetailsById } from '../api/apiClient'

const Sport = () => {
  const { id } = useParams()
  const [teamDetails, setTeamDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        const details = await getTeamDetailsById(id)
        setTeamDetails(details)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTeamDetails()
  }, [id])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return sportDetails ? (
    <div className="detail__container">
      <h3>{sportDetails.strSport}</h3>
      <img src={sportDetails.strSportThumb} alt={sportDetails.strSport} />
      <p>{sportDetails.strSportDescription}</p>
    </div>
  ) : (
    <div>No sport details available.</div>
  )
}

export default Sport
