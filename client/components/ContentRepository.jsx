// ContentRepository.jsx
import Sport from '../components/Sport.jsx'

export class ContentRepository {
  getFeaturedSports() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Sport.createMockedSports())
      }, 5000)
    })
  }
}
