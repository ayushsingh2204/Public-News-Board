import {
    render,
    fireEvent,
    screen,
  
  } from '@testing-library/react'
  import { BrowserRouter } from 'react-router-dom'
  import { ULogin } from './Login'
  
  describe('Login Page Testing properties', () => {
    it('LoginHeader', () => {
      render(
        <BrowserRouter>
          <ULogin />
        </BrowserRouter>
      )
  
      expect(screen.queryByText('LogIn')).toBeInTheDocument()
   
    })

    it('LoginEmail', () => {
        const { queryByPlaceholderText } = render(
          <BrowserRouter>
            <ULogin />
          </BrowserRouter>
        )
    
        const valueTest = queryByPlaceholderText('abc@gmail.com')
        fireEvent.change(valueTest, { target: { value: 'testVal' } })
        expect(valueTest.value).toBe('testVal')
      })


      it('LoginPassword', () => {
        const { queryByPlaceholderText } = render(
          <BrowserRouter>
            <ULogin />
          </BrowserRouter>
        )
    
        const valueTest = queryByPlaceholderText('Password')
        fireEvent.change(valueTest, { target: { value: 'testVal' } })
        expect(valueTest.value).toBe('testVal')
      })
})
  
  