import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './Home'

describe('HomePage', () => {
  it('should show correct initial UI', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(screen.queryByText('Latest News')).toBeInTheDocument()
    expect(screen.queryByText('All News')).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('search ...')).toBeInTheDocument()
  })

  it('input value check which updates on change', () => {
    const { queryByPlaceholderText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const testInput = queryByPlaceholderText('search ...')
    fireEvent.change(testInput, { target: { value: 'testVal' } })
    expect(testInput.value).toBe('testVal')
  })
})
