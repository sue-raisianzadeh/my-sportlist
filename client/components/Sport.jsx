import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSportDetailsById } from '../api/apiClient'

const Sport = () => {
  const { id } = useParams()
  const [sportDetails, setSportDetails] = useState(null)

  useEffect(() => {
    getSportDetailsById(id)
      .then((data) => setSportDetails(data))
      .catch(console.error)
  }, [id])

  if (!sportDetails) {
    return <div>Loading...</div>
  }

  // Adjust these fields to match the structure of your API response
  return (
    <div className="detail__container">
      <h2>{sportDetails.strSport}</h2>
      <img src={sportDetails.strSportThumb} alt={sportDetails.strSport} />
      <p>{sportDetails.strSportDescription}</p>
    </div>
  )
}

export default Sport
