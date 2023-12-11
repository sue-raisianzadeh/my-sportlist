import React from 'react'
import { getSportByCategory } from '../apiClient'
import { Link } from 'react-router-dom'
import Sport from './Sport'

const categoryList = [
  {
    id: 28,
    name: 'Team Sports',
  },
  {
    id: 12,
    name: 'Individual Sports',
  },
  {
    id: 16,
    name: 'Extreme Sports',
  },
  {
    id: 35,
    name: 'Water Sports',
  },
  {
    id: 80,
    name: 'Outdoor Sports',
  },
  {
    id: 99,
    name: 'Indoor Sports',
  },
  {
    id: 18,
    name: 'Motor Sports',
  },
  {
    id: 10751,
    name: 'Combat Sports',
  },
]
const Navbar = () => {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <Link to={'/'}> Home </Link>
        </li>
        <li>
          {categoryList.map((category) => (
            <Link key={category.id} to={`/${category.id}`}>
              {category.name}
            </Link>
          ))}
        </li>
      </ul>
      :
    </div>
  )
}

export default Navbar
