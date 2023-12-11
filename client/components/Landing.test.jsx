/* eslint-env jest */
/* global test, expect */
import React from 'react'
import Landing from './Landing'
import { render, screen } from '@testing-library/react'

test('to have sports in h1', () => {
  render(<Landing />)
  const title = screen.getByText('sports')
  console.log(title)

  expect(title).toMatch('Dev Flicks')
})
