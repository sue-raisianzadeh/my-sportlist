import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getSportsByCategory } from '../api/apiClient'

const categoryList = [
  { id: 'Football_ID', name: 'Football' },
  { id: 'Basketball_ID', name: 'Basketball' },
  { id: 'Volleyball_ID', name: 'Volleyball' },
  { id: 'ski_ID', name: 'ski' },
  { id: 'Swimming_ID', name: 'Swimming' },
]
const Navbar = () => {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <Link to={'/'}> Home </Link>
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
