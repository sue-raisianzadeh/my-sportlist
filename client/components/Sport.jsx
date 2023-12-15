import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSportDetailsById } from '../api/apiClient'

const Sport = () => {
  const { id } = useParams()
  const [data, setData] = useState('')

  useEffect(() => {
    if (id) {
      getSportDetailsById(id)
        .then((sports) => {
          setData(sports)
          console.log(sports)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [id])

  return (
    <div className="detail__container" style={{ marginLeft: '200px' }}>
      <h3>{data.title}</h3>
      <p>
        <i>{data.tagline}</i>
      </p>
      <p>Popularity: {data.popularity}</p>
      <p>Date of release: {data.release_date}</p>
      <p>Runtime: {data.runtime} minutes</p>
      <p>Overview: {data.overview}</p>
      <img src={imageBaseUrl + data.poster_path} alt="" />
    </div>
  )
}

export default Sport
