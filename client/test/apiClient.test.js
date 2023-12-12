// client/test/apiClient.test.js
import request from 'superagent'
import superagentMock from 'superagent-mock'
import { getPopularSports } from '../apiClient'

const mockConfig = [
  {
    pattern: 'https://www.thesportsdb.com/api/v1/json/1/all_sports.php(.*)',
    fixtures: (match, params, headers) => {
      return {
        sports: [
          { id: 1, name: 'Football' },
          { id: 2, name: 'Basketball' },
        ],
      }
    },
    get: (match, data) => {
      return { body: data }
    },
  },
  // i will add other mocks for getSportByCategory and getSportByID
]

describe('apiClient tests', () => {
  let mock

  beforeAll(() => {
    mock = superagentMock(request, mockConfig)
  })

  afterAll(() => {
    mock.unset()
  })

  test('getPopularSports returns sports data', async () => {
    const sports = await getPopularSports()
    expect(sports).toHaveLength(2)
    expect(sports[0].name).toBe('Football')
    expect(sports[1].name).toBe('Basketball')
  })

  // Add more tests for other functions
})
