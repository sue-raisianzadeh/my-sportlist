import React, { useEffect, useState } from 'react'
import Sport from './Sport'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import { Sporti } from '../../model/Sport'

const Sports = (props) => {
  const imageBaseUrl = 'https://source.unsplash.com/780x480/?sports'
  const [sportList, setSportList] = useState([])
  const [category, setCategory] = useState(0)
  const [description, setDescription] = useState(0)

  const { name: paramName, description: paramDescription } = useParams()

  useEffect(() => {
    const setNameAndDescription = () => {
      setCategory(Number(paramName))
      setDescription(Number(paramDescription))
    }

    setNameAndDescription()

    if (category && description) {
      props
        .setApi(category)
        .then((res) => {
          setSportList(res)
          console.log(res)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    } else if (!paramName && !paramDescription) {
      props
        .setApi()
        .then((res) => {
          setSportList(res)
          console.log(res)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  }, [paramName, paramDescription, category, description])

  return (
    <div>
      <div className="list__container">
        {sportList.name &&
          sportList.map((Sporti, i) => {
            if (props.search.length) {
              return (
                Sport.name
                  .toLocaleLowerCase()
                  .includes(props.search.toLocaleLowerCase()) && (
                  <div key={i}>
                    <h1>{Sport.name}</h1>
                    <h3>⭐Rates: {Sport.description}</h3>
                    <img src={`${imageBaseUrl}${Sport.poster_path}`} alt="" />
                    <a to={`/sports/${Sport.id}`}>View Detail</a>
                  </div>
                )
              )
            } else {
              return (
                <div key={i}>
                  <h1>{Sport.name}</h1>
                  <h3>Rates: {Sport.description}</h3>
                  <img src={`${imageBaseUrl}${Sport.poster_path}`} alt="" />
                  <Link to={`/sports/${Sport.id}`}>View Detail</Link>
                </div>
              )
            }
          })}
      </div>
    </div>
  )
}

Sports.propTypes = {
  setApi: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
}

export default Sports
