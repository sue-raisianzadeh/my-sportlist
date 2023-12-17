import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSportDetailsById } from '../api/apiClient'

const TeamDetails = () => {
  const { id } = useParams()
  const [teamDetails, setTeamDetails] = useState(null)

  useEffect(() => {
    getSportDetailsById(id)
      .then((data) => setTeamDetails(data))
      .catch((error) => console.error('Error fetching team details:', error))
  }, [id])

  if (!teamDetails) {
    return <div>Loading...</div>
  }

  return (
    <div className="team-details">
      <h1>{teamDetails.strTeam}</h1>
      <img
        style={{ width: '35rem', height: 'auto' }}
        src={teamDetails.strTeamBadge}
        alt={teamDetails.strTeam}
      />
      <p
        style={{
          fontSize: '15px',
          fontFamily: 'Corio',
          lineHeight: '2.25rem',
          textAlign: 'justify',
          padding: '10px',
        }}
      >
        {teamDetails.strDescriptionEN}
      </p>
      {/* Add more details as needed */}
      <Link
        style={{
          textDecoration: 'none',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '12px',
          hover: {
            color: 'blue',
          },
        }}
        to="/"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default TeamDetails
