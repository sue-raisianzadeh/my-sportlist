import React from 'react'
import { getAllSports } from '../api/apiClient'
import Sports from './Sports'

const Landing = (props) => {
  return (
    <div>
      <Sports search={props.search} setApi={() => getAllSports()} />
    </div>
  )
}

export default Landing
