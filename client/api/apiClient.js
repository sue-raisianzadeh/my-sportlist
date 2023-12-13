// client/api/apiClient.js
import request from 'superagent'

const apiBaseUrl = 'https://www.thesportsdb.com/api/v1/json/3/all_sports.php'

export async function getAllSports() {
  const pageNum = Math.floor(Math.random() * 20 + 1)

  try {
    const response = await request.get(
      `https://www.thesportsdb.com/api/v1/json/3/all_sports.php/all_sports.php`
    )
    return response.body.sports
  } catch (error) {
    console.error('Error fetching all sports:', error)
    throw error
  }
}
export async function getPopularSports() {
  const response = await request.get(
    `https://www.thesportsdb.com/api/v1/json/3/all_sports.php/all_sports.php`
  )
  return response.body.sports
}
export async function getSportByCategory(categoryName) {
  const response = await request.get(
    `https://www.thesportsdb.com/api/v1/json/3/all_category.php`
  )
  return response.body.sports
}

export async function getAllLeagues() {
  const response = await request.get(
    `$https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`
  )
  return response.body.leagues
}

export async function getLeagueDetailsById(leagueId) {
  const response = await request.get(
    `$thesportsdb.com/api/v1/json/all_countries.php
    id=${leagueId}`
  )
  return response.body.leagues[0]
}

export async function getTeamsByLeagueName(leagueName) {
  const response = await request.get(
    `https://www.thesportsdb.com/api/v1/json/3/all_sports.php/search_all_teams.php?l=${encodeURIComponent(
      leagueName
    )}`
  )
  return response.body.teams
}

export async function getTeamDetailsById(teamId) {
  const response = await request.get(
    `$https://www.thesportsdb.com/api/v1/json/3/all_sports.php/lookupteam.php?id=${teamId}`
  )
  return response.body.teams[0]
}
