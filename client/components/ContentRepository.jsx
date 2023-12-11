// ContentRepository.jsx
import React from 'react'
import Sport from './Sporti.jsx/index.js'

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
