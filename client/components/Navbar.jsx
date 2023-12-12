// client/components/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // Add your categories here
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
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
