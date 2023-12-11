import React from 'react'
import request from 'superagent'
import Sport from './components/Sport'

export function getGreeting() {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export async function getPopularSports() {
  const pageNum = Math.floor(Math.random() * 20 + 1)
  const response = await request.get(
    `https://api.sportsdb.com/v1/sports/popular?api_key=your_api_key&page=${pageNum}`
  )

  return response.body.results
}

export async function getSportByCategory(categoryID) {
  const pageNum = Math.floor(Math.random() * 20 + 1)
  const response =
    await request.get(`https://api.sportsdb.com/v1/sports/discover?api_key=your_api_key&category=${categoryID}&page=${pageNum}
  `)
  return response.body.results
}

export async function getSportByID(id) {
  const response =
    await request.get(`https://api.sportsdb.com/v1/sports/${id}?api_key=your_api_key&language=en-US
  `)
  return response.body
}

// Genre IDs:
// Action: 28
// Drama: 18
// Comedy: 35
// Science Fiction: 878
// Romance: 10749
