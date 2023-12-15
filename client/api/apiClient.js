import request from 'superagent'

const apiKey = '{apiKey}' // Replace with your actual API key
const theSportsDBHeaders = {
  'X-RapidAPI-Key': apiKey,
  'X-RapidAPI-Host': 'thesportsdb.p.rapidapi.com',
}

// Get a list of all sports
export async function getAllSports() {
  try {
    const response = await request
      .get('https://thesportsdb.p.rapidapi.com/all_sports.php')
      .set(theSportsDBHeaders)
    return response.body.sports
  } catch (error) {
    console.error('Error fetching all sports:', error)
    return []
  }
}

// Get details of a sport by its ID
export async function getSportDetailsById(id) {
  try {
    const response = await request
      .get(`https://thesportsdb.p.rapidapi.com/lookupsport.php?id=${id}`)
      .set(theSportsDBHeaders)
    return response.body.sports[0]
  } catch (error) {
    console.error('Error fetching sport details:', error)
    return null
  }
}

// Get random popular sports
export async function getPopularSports() {
  const sports = await getAllSports()
  if (sports && sports.length) {
    const shuffledSports = sports.sort(() => 0.5 - Math.random())
    return shuffledSports.slice(0, 3) // Get 3 random sports
  }
  return []
}

// Add more functions as required for your project
