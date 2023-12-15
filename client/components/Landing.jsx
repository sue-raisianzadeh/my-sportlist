import React from 'react'
import { getPopularSports } from '../api/apiClient'
import Sports from './Sports'

const Landing = (props) => {
  return (
    <div>
      <Sports search={props.search} setApi={() => getPopularSports()} />
    </div>
  )
}

export default Landing
