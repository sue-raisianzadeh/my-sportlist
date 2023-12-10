// Sport.jsx
import React, { useEffect, useState } from 'react'
import { getSportByID } from '../apiClient'
import { useParams } from 'react-router-dom'

const Sport = () => {
  const { id } = useParams()
  const parsedId = Number(id)
  const [ID, setID] = useState(parsedId)
  const [data, setData] = useState({})
  const imageBaseUrl =
    'https://pngtree.com/freebackground/blue-sky--white-clouds--silhouette--marathon--sports-poster--background-material_1113901.html'

  useEffect(() => {
    getSportByID(ID)
      .then((sports) => {
        setData(sports)
        console.log(sports)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ID])

  return (
    <div className="detail__container" style={{ marginLeft: '200px' }}>
      <h3>{data.title}</h3>
      <p>
        <i>{data.description}</i>
      </p>
      <p>Popularity: {data.popularity}</p>
      <p>Overview: {data.overview}</p>
      <img src={imageBaseUrl + data.poster_path} alt="" />
    </div>
  )
}

export default Sport
