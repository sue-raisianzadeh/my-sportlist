import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getSportsByCategory } from '../api/apiClient'

const Navbar = () => {
  const categoryList = [
    { id: 4526, name: 'Football' },
    { id: 4831, name: 'Basketball' },
    { id: 141822, name: 'Volleyball' },
    { id: 5141, name: 'ski' },
    { id: 5308, name: 'Swimming' },
  ]

  const [categorySports, setCategorySports] = useState([])

  const handleClick = async (categoryId) => {
    try {
      const sports = await getSportsByCategory(categoryId) // Fetch sports by category
      setCategorySports(sports) // Storing the fetched sports in state
    } catch (error) {
      console.error('Error fetching sports by category:', error)
    }
  }

  return (
    <div className="sidenav">
      <ul>
        <li>
          <Link to={'/'}> Home </Link>
        </li>

        <li>
          {categoryList.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              onClick={() => handleClick(category.id)} // Call the function on click
            >
              {category.name}
            </Link>
          ))}
        </li>
      </ul>

      {/* Render the fetched sports, you can replace this with your desired UI */}
      <div>
        {categorySports.map((sport, index) => (
          <div key={index}>
            <h1>{sport.name}</h1>
            <p>{sport.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
