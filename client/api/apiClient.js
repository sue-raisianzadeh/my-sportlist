import request from 'superagent'

const apiBaseUrl =
  'https://allsportsapi2.p.rapidapi.com/api/placeholder/player.png'

const headers = {
  'X-RapidAPI-Key': '4540e7eef7msh137d391951dcb69p11f962jsn3eafe93a6097',
  'X-RapidAPI-Host': 'allsportsapi2.p.rapidapi.com',
}

export async function getPopularSports() {
  const response = await request
    .get(`${apiBaseUrl}/all_leagues.php`)
    .set(headers)
  return response.body.leagues // Assuming 'leagues' represent popular sports
}

export async function getSportDetailsById(id) {
  const response = await request
    .get(`${apiBaseUrl}/lookupsport.php?id=${id}`)
    .set(headers)
  return response.body.sports[0]
}
export async function getTeamsByLeagueId(leagueId) {
  const response = await request
    .get(`${apiBaseUrl}/lookup_all_teams.php?id=${leagueId}`)
    .set(headers)
  return response.body.teams
}
