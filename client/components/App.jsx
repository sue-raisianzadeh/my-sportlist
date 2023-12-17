import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Sports from './Sports'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Sport from './Sport'
// import TeamDetails from './TeamDetails'; // Uncomment if needed

const App = () => {
  const [search, setSearch] = useState('')
  const location = useLocation()

  const isDetailView = location.pathname.includes('/sports/') // For view detail page
  const hideSearchbar = isDetailView // Hide searchbar on detail view

  return (
    <div className={isDetailView ? 'navbar-viewdetail__item' : 'background'}>
      {!hideSearchbar && <Searchbar search={search} setSearch={setSearch} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Sports search={search} />} />
        {/* <Route path="/category/:id" element={<TeamDetails />} /> */}
        <Route path="/sports/:id" element={<Sport />} />
      </Routes>
    </div>
  )
}

export default App
