import React from 'react'
import { useLocation } from 'react-router-dom'

const Sport = () => {
  const location = useLocation()
  const sport = location.state.sport

  if (!sport) {
    return <div>Loading...</div>
  }

  return (
    <div
      className="detail__container-detail"
      style={{
        backgroundColor: '#0e524f',
        backgroundSize: 'cover',
        textAlign: 'center',
        width: '80%',
        justifyContent: 'center',
        margin: 'auto',
        verticalAlign: 'center',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '4.5rem',
          fontFamily: 'Corio',
          lineHeight: '2.25rem',
          padding: '6rem 0rem 1rem 0rem',
        }}
      >
        {sport.strSport}
      </h2>
      <br />
      <img
        style={{ width: '40%', height: 'auto' }}
        src={sport.strSportThumb}
        alt={sport.strSport}
      />
      <br />
      <br />
      <p
        style={{
          fontSize: '2.5rem',
          color: 'white',
          fontFamily: 'Corio',
          lineHeight: '4.25rem',
          textAlign: 'justify',
          padding: '2rem 5rem',
          marginLeft: '15%',
        }}
      >
        {sport.strSportDescription}
      </p>
    </div>
  )
}

export default Sport
