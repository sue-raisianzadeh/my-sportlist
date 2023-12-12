import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTeamDetailsById } from '../api/apiClient'

const Sport = () => {
  const { id } = useParams()
  const [teamDetails, setTeamDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const imageBaseUrl =
    'https://www.thesportsdb.com/api/v1/json/3/all_sports.php'

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

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return teamDetails ? (
    <div className="detail__container">
      <h3>{teamDetails.strTeam}</h3>
      <img
        src={imageBaseUrl + teamDetails.strTeamBadge}
        alt={teamDetails.strTeam}
      />
      <p>{teamDetails.strDescriptionEN}</p>
    </div>
  ) : (
    <div>No team details available.</div>
  )
}

export default Sport
