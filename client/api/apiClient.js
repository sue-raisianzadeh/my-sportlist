import request from 'superagent'
import Sport from '../components/Sport'

const apiBaseUrl = 'https://www.thesportsdb.com/api/v1/json/3'

const headers = {
  'X-RapidAPI-Key': '4540e7eef7msh137d391951dcb69p11f962jsn3eafe93a6097',
  'X-RapidAPI-Host': 'allsportsapi2.p.rapidapi.com',
}

export function getGreeting() {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export async function getSportsByCategory(categoryId) {
  const response = await request
    .get(`${apiBaseUrl}/searchteams.php?t=${categoryId}`)
    .set(headers)
  return response.body.teams // represent sports by category for Navbar
}

export async function getPopularSports() {
  const pageNum = Math.floor(Math.random() * 20) + 1
  const response = await request
    .get(`${apiBaseUrl}/searchteams.php?t=Arsenal=${pageNum}`)
    .set(headers)
  return response.body.leagues
}

export async function getSportDetailsById(id) {
  const pageNum = Math.floor(Math.random() * 20) + 1
  const response = await request
    .get(`${apiBaseUrl}/lookupsport.php?id=${id}&page=${pageNum}`)
    .set(headers)
  return response.body.sports[0]
}

export async function getTeamsByLeagueId(leagueId) {
  const response = await request
    .get(`${apiBaseUrl}/lookup_all_teams.php?id=${leagueId}`)
    .set(headers)
  return response.body.teams
}
