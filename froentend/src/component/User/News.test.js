import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { News } from './News'

describe('News Component Data', () => {
  it('Check for correct UI initials', () => {
    render(
      <BrowserRouter>
        <News />
      </BrowserRouter>
    )

    // expect(screen.queryByText('Report Issue')).toBeInTheDocument()
  })

  //   it('check for correct input values on change', () => {
  //     const { queryByPlaceholderText } = render(
  //       <BrowserRouter>
  //         <News />
  //       </BrowserRouter>
  //     )

  //     const inputVal = queryByPlaceholderText('Email')
  //     fireEvent.change(inputVal, { target: { value: 'testVal' } })
  //     expect(inputVal.value).toBe('testVal')
  //   })
})
