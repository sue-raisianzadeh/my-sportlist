import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getSportsByCategory, getPopularSports } from '../api/apiClient'
import Landing from './Landing'
import Sports from './Sports'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Sport from './Sport'
// import CategoryComponent from './CategoryComponent'

const App = () => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    getPopularSports().catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="background">
      <Searchbar search={search} setSearch={setSearch} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing search={search} />} />
        <Route
          path="/:category"
          element={
            <Sports
              setApi={(category) => getSportByCategory(category)}
              search={search}
            />
          }
        />
        {/* <Route path="/category/:categoryName" element={<CategoryComponent />} /> */}
        <Route path="/sports/:id" element={<Sport />} />
      </Routes>
    </div>
  )
}

export default App
