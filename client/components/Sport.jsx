// Sport.jsx
import React from 'react'

const Sport = ({ name, description }) => (
  <div className="sport-card">
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
)

export default Sport
