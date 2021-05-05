import React from 'react'
import AboutMe from '../components/AboutMe'
import {render, screen} from '@testing-library/react'

it('renders without crashing', () => {
  render(<AboutMe />);
  const testMessage = "About Me"
  expect(screen.getByText(testMessage)).toBeDefined()
});

it('display correct heading', () => {
  render(<AboutMe />);
  expect(screen.getByText("Sharing a little bit of my story...")).toBeDefined()
  expect(screen.getByText("General Overview")).toBeDefined()
  expect(screen.getByText("Statistics")).toBeDefined()
});

test('has correct class', () => {
  render(<AboutMe />)
  expect(screen.getByTestId('about')).toBeDefined()
})
