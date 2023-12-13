import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const categories = [
    { id: 4526, name: 'Football' },
    { id: 4831, name: 'Basketball' },
    { id: 141822, name: 'Volleyball' },
    { id: 5141, name: 'ski' },
    { id: 5308, name: 'Swimmimg' },
  ]

  return (
    <div className="sidenav">
      <ul>
        <li>
          <Link to={'/'}> Home </Link>
        </li>

        <li>
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              {category.name}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default Navbar
