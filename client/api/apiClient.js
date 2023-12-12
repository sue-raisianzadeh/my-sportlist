// client/api/apiClient.js
import request from 'superagent'

const apiBaseUrl = 'https://www.thesportsdb.com/api/v1/json/3' // Replace '3' with your actual API key

export async function getAllSports() {
  try {
    const response = await request.get(`${apiBaseUrl}/all_sports.php`)
    return response.body.sports
  } catch (error) {
    console.error('Error fetching all sports:', error)
    throw error // or return an error message or empty array based on your app's needs
  }
}
export async function getPopularSports() {
  const response = await request.get(`${apiBaseUrl}/all_sports.php`)
  return response.body.sports
}
export async function getSportByCategory(categoryName) {
  const response = await request.get(`${apiBaseUrl}/all_category.php`)
  return response.body.sports
}

export async function getAllLeagues() {
  const response = await request.get(`${apiBaseUrl}/all_leagues.php`)
  return response.body.leagues
}

export async function getLeagueDetailsById(leagueId) {
  const response = await request.get(
    `${apiBaseUrl}/lookupleague.php?id=${leagueId}`
  )
  return response.body.leagues[0]
}

export async function getTeamsByLeagueName(leagueName) {
  const response = await request.get(
    `${apiBaseUrl}/search_all_teams.php?l=${encodeURIComponent(leagueName)}`
  )
  return response.body.teams
}

export async function getTeamDetailsById(teamId) {
  const response = await request.get(
    `${apiBaseUrl}/lookupteam.php?id=${teamId}`
  )
  return response.body.teams[0]
}
