import React from 'react'
import { Link } from 'react-router-dom'

const categoryList = [
  { id: '114', name: 'Football' },
  { id: '106', name: 'Basketball' },
  { id: '116', name: 'Volleyball' },
  { id: '105', name: 'Baseball' },
  { id: '134', name: 'Skiing' },
  { id: '113', name: 'Cycling' },
]

const Navbar = () => {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {categoryList.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar

// idSport:"131"
// strSport:"Multi Sports"
// idSport:"102"
// strSport:"Soccer"
// idSport:"114"
// strSport:"Australian Football"
// idSport:"107"
// strSport:"American Football"
// idSport:"116"
// strSport:"Volleyball"
// idSport:"113"
// strSport:"Cycling"
// idSport:"103"
// strSport:"Motorsport"
// idSport:"134"
// strSport:"Skiing"
// idSport:"105"
// strSport:"Baseball"
// idSport:"106"
// strSport:"Basketball"
// idSport:"109"
// strSport:"Golf"
// idSport:"110"
// strSport:"Rugby"
// idSport:"111"
// strSport:"Tennis"
// idSport:"112"
// strSport:"Cricket"
