import React from 'react'
import { Link } from 'react-router-dom'

const categories = ['Rugby', 'Basketball', 'Volleyball', 'Motorsport', 'Golf']

const Navbar = () => {
  return (
    <div className="sidenav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {categories.map((category, index) => (
            <Link key={index} to={`/?category=${category}`}>
              {category}
            </Link>
          ))}
        </ul>
      </nav>
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
