
import React, { useEffect, useState } from 'react'
import Sport from './Sport'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {SportData  } from '../../Model/Sport'

interface Props {
  setApi: (name?: string) => Promise<any>
  setApi: (description?: string) => Promise<any>
  search: string
}

const Sports = (props: Props) => {
  const imageBaseUrl = 'https://source.unsplash.com/780x480/?sports';
  const [sportList, setSportList] = useState([])
  const [name, setName] = useState(0)
  const [description, setDescription] = useState(0)

  const { name: param } = useParams()
  const { description: param } = useParams()

  useEffect(() => {
    setName(Number(param))
    setDescription(Number(param))
    if (name, description) {
      props.setApi(name, description).then((res) => {
        setSportList(res)
        console.log(res)
      })
    } else if (!param) {
      props.setApi().then((res) => {
        setSportList(res)
        console.log(res)
      })
    }
  }, [param, Name, Description])

  return (
    <div>
      <div className="list__container">
        {movieList.length &&

          movieList.map((movie: MovieType, i) => {
            if (props.search.length) {
              return (
                movie.title.toLocaleLowerCase().includes(props.search.toLocaleLowerCase()) && (
                  <div key={i}>
                    <h1>{movie.title}</h1>
                    <h3>⭐Rates: {movie.vote_average}</h3>

                    <img src={imageBaseUrl + movie.poster_path} alt="" />
                    <a href={`/movies/${movie.id}`}>View Detail</a>
                  </div>
                )
              )
            } else {
              return (
                <div key={i}>
                  <h1>{movie.title}</h1>
                  <h3>Rates: {movie.vote_average}</h3>


                  <img src={imageBaseUrl + movie.poster_path} alt="" />
                  <a href={`/movies/${movie.id}`}>View Detail</a>
                </div>
              )
            }
          })}
      </div>
    </div>
  )
}

export default Sports