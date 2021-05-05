import React from 'react'
import Header from '../components/Header'
import {render, screen} from '@testing-library/react'

it('renders without crashing', () => {
  render(<Header />);
  const testMessage = "UI Developer. UX Desinger. Problem Solver."
  expect(screen.getByText(testMessage)).toBeDefined()
});

test('has correct class', () => {
  render(<Header />)
  const element = screen.getByTestId('header')
  expect(element).toBeDefined()
  expect(element).toHaveClass('header')
})