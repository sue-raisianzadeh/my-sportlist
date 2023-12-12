import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Sport = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSportData = async () => {
      try {
        const response = await axios.get(
          `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
        )
        setData(response.data.leagues[0])
      } catch (err) {
        setError('Error fetching sport data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchSportData()
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="detail__container">
      {data ? (
        <>
          <h3>{data.strLeague}</h3>
          <p>Country: {data.strCountry}</p>
          <p>Sport: {data.strSport}</p>
          <p>Description: {data.strDescriptionEN}</p>
          {/* <img src={imageBaseUrl + data.poster_path} alt="" /> */}

          {data.strBadge && <img src={data.strBadge} alt={data.strLeague} />}
        </>
      ) : (
        <p>No sport data available.</p>
      )}
    </div>
  )
}

export default Sport
