// App.jsx
import React, { useEffect, useContext } from 'react'
import { SportContext } from './components/contexts/SportContext'
import SportsList from './components/SportList'
import { ContentRepository } from './components/ContentRepository'

const App = () => {
  const { setSports } = useContext(SportContext)

  useEffect(() => {
    const fetchSports = async () => {
      const contentRepo = new ContentRepository()
      const featuredSports = await contentRepo.getFeaturedSports()
      setSports(featuredSports)
    }

    fetchSports()
  }, [setSports])

  return (
    <div className="App">
      <SportsList />
      <h1>hi</h1>
    </div>
  )
}

export default App
