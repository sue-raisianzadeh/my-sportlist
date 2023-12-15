import axios from 'axios'

// Replace 'YOUR_RAPIDAPI_KEY' with your actual RapidAPI key
const rapidAPIKey = 'APIKey: b553c64367msh2737608445cc59dp1cdd54jsnfbe2fc0027dd'

// Setting up the axios instance with RapidAPI host and key
const rapidAPI = axios.create({
  baseURL: 'https://api-sports.api-host.com/',
  headers: {
    'x-rapidapi-key': rapidAPIKey,
    'x-rapidapi-host': 'API_HOST',
  },
})

export const getPopularSports = async () => {
  try {
    const response = await rapidAPI.get('/sports')
    return response.data
  } catch (error) {
    console.error('Error fetching sports:', error)
    throw error
  }
}

export const getSportDetailsById = async (id) => {
  try {
    const response = await rapidAPI.get(`/sports/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching sport details:', error)
    throw error
  }
}
