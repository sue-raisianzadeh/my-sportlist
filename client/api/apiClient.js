import request from 'superagent'

const rapidApiKey = '4540e7eef7msh137d391951dcb69p11f962jsn3eafe93a6097'
const sportsDbApiHost = 'thesportsdb.p.rapidapi.com'

export async function getAllSports() {
  try {
    const response = await request
      .get(`https://${sportsDbApiHost}/all_sports.php`)
      .set('X-RapidAPI-Key', rapidApiKey)
      .set('X-RapidAPI-Host', sportsDbApiHost)
    return response.body.sports
  } catch (error) {
    console.error('Error fetching all sports:', error)
    return []
  }
}

export async function getSportDetailsById(id) {
  try {
    const response = await request
      .get(`https://${sportsDbApiHost}/lookupleague.php?id=${id}`)
      .set('X-RapidAPI-Key', rapidApiKey)
      .set('X-RapidAPI-Host', sportsDbApiHost)
    return response.body.leagues[0]
  } catch (error) {
    console.error('Error fetching sport details:', error)
    return null
  }
}
export async function getSportsByCategory(categoryId) {
  try {
    const response = await request
      .get(`https://${sportsDbApiHost}/lookupsport.php?id=${categoryId}`)
      .set('X-RapidAPI-Key', rapidApiKey)
      .set('X-RapidAPI-Host', sportsDbApiHost)
    return response.body.sports
  } catch (error) {
    console.error(`Error fetching sports by category ${categoryId}:`, error)
    return []
  }
}
