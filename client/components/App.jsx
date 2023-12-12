import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { getPopularSports, getSportByCategory } from '../apiClient'
import Landing from './Landing'
import Sports from './Sports'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Sport from './Sport'

const App = () => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    getPopularSports().catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <div className="background">
        <Searchbar search={search} setSearch={setSearch} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing search={search} />} />
          <Route
            path="/:name"
            element={
              <Sports setApi={(name) => getSportByName(name)} search={search} />
            }
          />
          <Route path="/Sports/:id" element={<Sport />} />
        </Routes>
      </div>
    </>
  )
}

export default App
