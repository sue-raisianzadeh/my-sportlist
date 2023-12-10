import { Sport } from './Sport'

export class ContentRepository {
  static getFeaturedSports() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Sport.createMockedSports())
      }, 5000) // Simulating a 5-second API call delay
    })
  }
}
