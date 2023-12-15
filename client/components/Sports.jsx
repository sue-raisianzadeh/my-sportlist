import Sport from './Sport'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SportType } from '../../model/Sporti'

const Sports = (props) => {
  const imageBaseUrl = 'https://www.thesportsdb.com/api/v1/json/3'
  const [sportList, setSportList] = useState([])
  const [category, setCategory] = useState(0)
  const { Category: param } = useParams()

  useEffect(() => {
    setCategory(Number(param))
    if (category) {
      props.setApi(category).then((res) => {
        setSportList(res)
        console.log(res)
      })
    } else if (!param) {
      props.setApi().then((res) => {
        setSportList(res)
        console.log(res)
      })
    }
  }, [param, category])

  return (
    <div>
      <div className="list__container">
        {sportList.length &&
          sportList.map((movie, i) => {
            if (props.search.length) {
              return (
                sport.title
                  .toLowerCase()
                  .includes(props.search.toLowerCase()) && (
                  <div key={i}>
                    <h1>{sport.title}</h1>
                    <h3>⭐Rates: {sport.vote_average}</h3>
                    <img src={imageBaseUrl + sport.poster_path} alt="" />
                    <a href={`/sports/${sport.id}`}>View Detail</a>
                  </div>
                )
              )
            } else {
              return (
                <div key={i}>
                  <h1>{sport.title}</h1>
                  <h3>Rates: {sport.vote_average}</h3>
                  <img src={imageBaseUrl + sport.poster_path} alt="" />
                  <a href={`/sports/${sport.id}`}>View Detail</a>
                </div>
              )
            }
          })}
      </div>
    </div>
  )
}

export default Sports
