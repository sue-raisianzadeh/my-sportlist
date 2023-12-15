import request from 'superagent'

const apiBaseUrl = 'https://sofasport.p.rapidapi.com/v1/search/multi'
const rapidApiKey = '4540e7eef7msh137d391951dcb69p11f962jsn3eafe93a6097'

// Fetches all sports
export async function getAllSports() {
  try {
    const response = await request
      .get(`${apiBaseUrl}/all_sports.php`)
      .set('X-RapidAPI-Key', rapidApiKey)
    return response.body.sports // Adjust as per the actual API response structure
  } catch (error) {
    console.error('Error fetching all sports:', error)
    return []
  }
}

// Fetches sports by category ID
export async function getSportsByCategory(categoryId) {
  try {
    const response = await request
      .get(`${apiBaseUrl}/sports_by_category.php?id=${categoryId}`)
      .set('X-RapidAPI-Key', rapidApiKey)
    return response.body.sports // Adjust as per the actual API response structure
  } catch (error) {
    console.error(`Error fetching sports by category ${categoryId}:`, error)
    return []
  }
}

// Fetches details of a sport by ID
export async function getSportDetailsById(id) {
  try {
    const response = await request
      .get(`${apiBaseUrl}/lookupsport.php?id=${id}`)
      .set('X-RapidAPI-Key', rapidApiKey)
    return response.body.sports[0] // Adjust as per the actual API response structure
  } catch (error) {
    console.error('Error fetching sport details:', error)
    return null
  }
}

// Fetches a random selection of popular sports
export async function getPopularSports() {
  try {
    const response = await request
      .get(`${apiBaseUrl}/all_leagues.php`)
      .set('X-RapidAPI-Key', rapidApiKey)
    // Randomly select sports from the response
    const randomSports = response.body.leagues
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
    return randomSports // Adjust as per the actual API response structure
  } catch (error) {
    console.error('Error fetching popular sports:', error)
    return []
  }
}
