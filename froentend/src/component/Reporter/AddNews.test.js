import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { AddNews } from './AddNews'

describe('Post News Fields', () => {
  it('Should render correct initial UI', () => {
    render(
      <BrowserRouter>
        <AddNews />
      </BrowserRouter>
    )

    expect(screen.queryByPlaceholderText('News Title')).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('City')).toBeInTheDocument()
    expect(screen.getByText("Post Today's Top News")).toBeInTheDocument()
  })

  it('input value check which updates on change', () => {
    const { queryByPlaceholderText } = render(
      <BrowserRouter>
        <AddNews />
      </BrowserRouter>
    )

    const searchInput = queryByPlaceholderText('News Title')
    fireEvent.change(searchInput, { target: { value: 'testVal' } })
    expect(searchInput.value).toBe('testVal')

    const searchInput1 = queryByPlaceholderText('City')
    fireEvent.change(searchInput1, { target: { value: 'test' } })
    expect(searchInput1.value).toBe('test')
  })
})
