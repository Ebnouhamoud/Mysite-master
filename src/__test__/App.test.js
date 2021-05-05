import React from 'react'
import App from '../components/App'
import {render, screen} from '@testing-library/react'
import { BrowserRouter as Router} from 'react-router-dom'

it('renders without crashing', () => {
  render(<Router><App /></Router>);
  const testMessage = "Hello, I'm"
  expect(screen.getByText(testMessage)).toBeDefined()
});