import request from 'superagent'

const rapidApiKey = '4540e7eef7msh137d391951dcb69p11f962jsn3eafe93a6097'
const sportsDbApiHost = 'thesportsdb.p.rapidapi.com'
const sofaSportApiHost = 'sofasport.p.rapidapi.com'

export function getGreeting() {
  return request.get('/greeting').then((res) => res.body.greeting)
}

// Fetches all sports
export async function getAllSports() {
  try {
    const response = await request
      .get(`https://${sofaSportApiHost}/v1/sports`)
      .set('X-RapidAPI-Key', rapidApiKey)
      .set('X-RapidAPI-Host', sofaSportApiHost)
    return response.body.results
  } catch (error) {
    console.error('Error fetching all sports:', error)
    return []
  }
}

// List All teams details in a league by Id
export async function getSportDetailsById(id) {
  try {
    const response = await request
      .get(`https://${sportsDbApiHost}/lookup_all_teams.php?id=${id}`)
      .set('X-RapidAPI-Key', rapidApiKey)
      .set('X-RapidAPI-Host', sportsDbApiHost)
    return response.body.teams
  } catch (error) {
    console.error('Error fetching league details by ID:', error)
    return []
  }
}

// Fetches sports by category ID
export async function getSportsByCategory(categoryId) {
  try {
    const response = await request
      .get(`https://${sofaSportApiHost}/v1/categories?sport_id=${categoryId}`)
      .set('X-RapidAPI-Key', rapidApiKey)
      .set('X-RapidAPI-Host', sofaSportApiHost)
    return response.body.results // Adjust as per the actual API response structure
  } catch (error) {
    console.error(`Error fetching sports by category ${categoryId}:`, error)
    return []
  }
}

// Fetches a random selection of popular sports
export async function getPopularSports() {
  try {
    const response = await request
      .get(`https://${sportsDbApiHost}/all_leagues.php`)
      .set('X-RapidAPI-Key', rapidApiKey)
      .set('X-RapidAPI-Host', sportsDbApiHost)
    return response.body.leagues // Adjust as per the actual API response structure
  } catch (error) {
    console.error('Error fetching popular sports:', error)
    return []
  }
}
