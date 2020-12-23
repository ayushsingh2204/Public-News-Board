import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { SignUp } from './SignUp'

describe('Sign Up Page Testing properties', () => {
  it('SignUpHeader', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    expect(screen.queryByText('SignUp')).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('abc@gmail.com')).toBeInTheDocument()
  })

  it('Name', () => {
    const { queryByPlaceholderText } = render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const valueTest = queryByPlaceholderText('Username')
    fireEvent.change(valueTest, { target: { value: 'testVal' } })
    expect(valueTest.value).toBe('testVal')
  })

  it('Email', () => {
    const { queryByPlaceholderText } = render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const valueTest = queryByPlaceholderText('abc@gmail.com')
    fireEvent.change(valueTest, { target: { value: 'testVal' } })
    expect(valueTest.value).toBe('testVal')
  })

  it('Password', () => {
    const { queryByPlaceholderText } = render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const valueTest = queryByPlaceholderText('Password')
    fireEvent.change(valueTest, { target: { value: 'testVal' } })
    expect(valueTest.value).toBe('testVal')
  })
  it('Confirm Password', () => {
    const { queryByPlaceholderText } = render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const valueTest = queryByPlaceholderText('Confirm Password')
    fireEvent.change(valueTest, { target: { value: 'testVal' } })
    expect(valueTest.value).toBe('testVal')
  })

  it('City', () => {
    const { queryByPlaceholderText } = render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const valueTest = queryByPlaceholderText('city')
    fireEvent.change(valueTest, { target: { value: 'testVal' } })
    expect(valueTest.value).toBe('testVal')
  })

  it('Phoneno', () => {
    const { queryByPlaceholderText } = render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const valueTest = queryByPlaceholderText('xxx-xxx-xxxx')
    fireEvent.change(valueTest, { target: { value: 1111111111 } })
    expect(valueTest.value).toBe('111-111-1111')
  })

  it('Aadharno', () => {
    const { queryByPlaceholderText } = render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const valueTest = queryByPlaceholderText('xxxx-xxxx-xxxx')
    fireEvent.change(valueTest, { target: { value: 111111111111 } })
    expect(valueTest.value).toBe('1111-1111-1111')
  })


  
})
