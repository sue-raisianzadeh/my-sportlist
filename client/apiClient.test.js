/* eslint-env jest */
/* global test, expect */

const request = require('supertest')
const api = require('./apiClient')

test('getPopularSports should return an array containing objects of various sports', () => {
  const expected = true
  return request(api)
    .get('/')
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(Array.isArray(res.body.results)).toBe(expected)
    })
})
