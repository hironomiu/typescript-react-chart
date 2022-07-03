import { render, screen } from '@testing-library/react'
import Main from '../components/Main'
describe('Main', () => {
  it('test', () => {
    render(<Main />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
