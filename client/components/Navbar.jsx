import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const categories = [
    'Football',
    'Basketball',
    'Volleyball',
    'Biking',
    'Swimmimg',
  ]

  return (
    <div className="sidenav">
      <ul>
        <li>
          <Link to={'/'}> Home </Link>
        </li>

        <li>
          {categories.map((category, index) => (
            <Link key={index} to={`/category/${category.index}`}>
              {category}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default Navbar
