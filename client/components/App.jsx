import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sports from './Sports'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Sport from './Sport'
import TeamDetails from './TeamDetails'
const App = () => {
  const [search, setSearch] = useState('')

  return (
    <div className="background">
      <Searchbar search={search} setSearch={setSearch} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Sports search={search} />} />
        <Route path="/category/:id" element={<TeamDetails />} />
        <Route path="/sports/:id" element={<Sport />} />
      </Routes>
    </div>
  )
}

export default App
