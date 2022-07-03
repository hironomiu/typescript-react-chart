import { render, screen } from '@testing-library/react'
import App from '../App'

jest.mock('chart.js', () => ({
  Chart: {
    register: () => null,
  },
  registerables: [],
}))

describe('App', () => {
  it('renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/Chart Sample/i)
    expect(linkElement).toBeInTheDocument()
  })
})
