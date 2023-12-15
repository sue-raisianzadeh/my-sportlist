import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getPopularSports } from '../api/apiClient'
import Landing from './Landing'
import Sports from './Sports'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Sport from './Sport'
import CategoryComponent from './CategoryComponent'

const App = () => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    // Fetch popular sports when the app loads.
    getPopularSports().catch((err) => {
      console.error('Error fetching popular sports:', err)
    })
  }, [])

  return (
    <div className="background">
      <Searchbar search={search} setSearch={setSearch} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing search={search} />} />
        <Route path="/category/:categoryID" element={<CategoryComponent />} />
        <Route path="/sports/:id" element={<Sport />} />
      </Routes>
    </div>
  )
}

export default App
