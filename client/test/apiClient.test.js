// client/test/apiClient.test.js
import request from 'superagent'
import superagentMock from 'superagent-mock'
import { getAllSports } from '../apiClient' // Corrected function name

const mockConfig = [
  {
    pattern: 'https://thesportsdb.p.rapidapi.com/all_sports.php(.*)', // Corrected pattern
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
  // Additional mocks for getSportDetailsById and getSportsByCategory can be added here
]

describe('apiClient tests', () => {
  let mock

  beforeAll(() => {
    mock = superagentMock(request, mockConfig)
  })

  afterAll(() => {
    mock.unset()
  })

  test('getAllSports returns sports data', async () => {
    // Corrected test description
    const sports = await getAllSports()
    expect(sports).toHaveLength(2)
    expect(sports[0].name).toBe('Football')
    expect(sports[1].name).toBe('Basketball')
  })

  // Add more tests for other functions
})
