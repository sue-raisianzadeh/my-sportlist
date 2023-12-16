import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSportDetailsById } from '../api/apiClient'

const Sport = () => {
  const { id } = useParams()
  const [sportDetails, setSportDetails] = useState(null)

  useEffect(() => {
    const fetchSportDetails = async () => {
      const details = await getSportDetailsById(id)
      setSportDetails(details)
    }

    fetchSportDetails()
  }, [id])

  if (!sportDetails) return <div>Loading...</div>

  return (
    <div className="sport-details">
      <h2>{sportDetails.strSport}</h2>
      <img src={sportDetails.strSportThumb} alt={sportDetails.strSport} />
      <p>{sportDetails.strSportDescription}</p>
      {/* ... other details */}
    </div>
  )
}

export default Sport
