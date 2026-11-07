
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('NetKode Diwali React Application', () => {

it('should display the main Diwali heading', () => {
  render(<App />)

  const heading = screen.getByRole('heading', {
    level: 1
  })

  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent(/Advance Hapy.*Diwali!/i)
})

  it('should display the company name', () => {
    render(<App />)

    expect(
      screen.getByText('NETKODE NETWORKS')
    ).toBeInTheDocument()
  })

  it('should display the colleagues greeting', () => {
    render(<App />)

    expect(
      screen.getByText('Dear Colleagues,')
    ).toBeInTheDocument()
  })

  it('should display the closing company message', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Team NetKode Networks'
      })
    ).toBeInTheDocument()
  })

})
