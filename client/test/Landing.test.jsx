// client/test/Landing.test.js
import React from 'react'
import Landing from '../components/Landing'
import { render, screen } from '@testing-library/react'

test('Landing component renders correctly', () => {
  render(<Landing />)
  // Replace 'Sports Text' with actual text you expect in Landing component
  const title = screen.getByText('Sports Text')
  expect(title).toBeInTheDocument()
})
