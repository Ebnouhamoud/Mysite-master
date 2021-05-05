import React from 'react'
import Footer from '../components/Footer'
import {render, screen} from '@testing-library/react'

it('renders without crashing', () => {
  render(<Footer />);
  const testMessage = "Phone: XXXXXX"
  expect(screen.getByText(testMessage)).toBeDefined()
});

test('has correct class', () => {
  render(<Footer />)
  const element = screen.getByTestId('footer')
  expect(element).toBeDefined()
  expect(element).toHaveClass('footer')
})