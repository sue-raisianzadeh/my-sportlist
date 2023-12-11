import React from 'react'
import Sports from './Sports'
import { getPopularSports } from '../apiClient'

const Landing = (props) => {
  return (
    <div>
      <Sports search={props.search} setApi={() => getPopularSports()} />
    </div>
  )
}

export default Landing
