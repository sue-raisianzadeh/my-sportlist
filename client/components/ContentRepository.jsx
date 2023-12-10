// ContentRepository.jsx
import React from 'react'
import Sport from '../components/Sport.jsx'

// ContentRepository.js
export class ContentRepository {
  getFeaturedSports() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Sport.createMockedSports())
      }, 5000)
    })
  }
}
