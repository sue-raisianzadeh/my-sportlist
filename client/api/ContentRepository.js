import axios from 'axios'
import { Sporti } from '../../model/Sporti'

export class ContentRepository {
  static apiBaseUrl = 'https://www.thesportsdb.com/api/v1/json/1'

  static async getFeaturedSports() {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/all_sports.php`)
      return response.data.sports.map((sport) => Sporti.fromApiData(sport))
    } catch (error) {
      console.error('Error fetching featured sports:', error)
      return []
    }
  }
}
