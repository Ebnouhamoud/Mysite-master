import React from 'react'
import Contact from '../components/Contact'
import {render, screen} from '@testing-library/react'

it('renders without crashing', () => {
  render(<Contact />);
  const testMessage = "XXXXXX@gmail.com"
  expect(screen.getByText(testMessage)).toBeDefined()
});

test('has correct class', () => {
  render(<Contact />)
  const element = screen.getByTestId('contact')
  expect(element).toBeDefined()
  expect(element).toHaveClass('contact')
})