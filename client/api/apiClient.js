import request from 'superagent'

const apiBaseUrl = 'https://www.thesportsdb.com/api/v1/json/3'
const rapidApiKey = 'YOUR_RAPIDAPI_KEY'

// Fetches all sports
export const getAllSports = async () => {
  try {
    const response = await request
      .get(`${apiBaseUrl}/all_sports.php`)
      .set('X-RapidAPI-Key', rapidApiKey)
    return response.body.sports
  } catch (error) {
    console.error('Error fetching all sports:', error)
    return []
  }
}

// Fetches sports by category ID
export const getSportsByCategory = async (categoryId) => {
  // Assuming there's an endpoint that accepts category ID
  try {
    const response = await request
      .get(`${apiBaseUrl}/sports_by_category.php?id=${categoryId}`)
      .set('X-RapidAPI-Key', rapidApiKey)
    return response.body.sports
  } catch (error) {
    console.error(`Error fetching sports by category ${categoryId}:`, error)
    return []
  }
}

// Fetches details of a sport by ID
export const getSportDetailsById = async (id) => {
  try {
    const response = await request
      .get(`${apiBaseUrl}/lookupsport.php?id=${id}`)
      .set('X-RapidAPI-Key', rapidApiKey)
    return response.body.sports[0]
  } catch (error) {
    console.error('Error fetching sport details:', error)
    return null
  }
}

// Fetches a random selection of popular sports
export const getPopularSports = async () => {
  try {
    const response = await request
      .get(`${apiBaseUrl}/all_leagues.php`)
      .set('X-RapidAPI-Key', rapidApiKey)
    // Randomly select sports from the response
    const randomSports = response.body.leagues
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
    return randomSports
  } catch (error) {
    console.error('Error fetching popular sports:', error)
    return []
  }
}
