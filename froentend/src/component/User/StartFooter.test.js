import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { SimpleFooter } from './StartFooter'

it('render correct initial UI', () => {
  render(
    <BrowserRouter>
      <SimpleFooter />
    </BrowserRouter>
  )

  expect(screen.getByText('© 2020 Copyright E-News')).toBeInTheDocument()
})
