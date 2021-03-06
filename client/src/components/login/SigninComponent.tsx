import React, { useState } from 'react'
import { Button, Form, JustifyBetweenRow, Column, Row, FormErrorMessage } from '@/components'
import { IUserLoginCredentials } from '@/models'
import { InputWithIcon } from '../input2'
import { Key, User } from 'react-feather'
import { isEmailValid, isPasswordValid } from '@/utils/validationUtils'
import { useAuth } from '@/hooks/useAuth'
import { useToggle } from '@/hooks/useToggle'

interface Props {}
const SigninComponent: React.FC<Props> = () => {
  const [isPasswordVisible, togglePasswordVisibility] = useToggle(false)

  const {
    tryLogin: { login }
  } = useAuth()

  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [credentials, setCredentials] = useState<IUserLoginCredentials>({
    email: 'info@oguzsancaktar.com',
    password: '12341234'
  })

  const validateFormFields = (): boolean => {
    setEmailError(false)
    setPasswordError(false)
    setErrorMessage('')
    if (!isEmailValid(credentials.email)) {
      setErrorMessage('Please enter a valid email')
      setEmailError(true)
      return false
    }
    if (!isPasswordValid(credentials.password)) {
      setErrorMessage('Password must be at least 6 characters long')
      setPasswordError(true)
      return false
    }
    return true
  }

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationResult = validateFormFields()

    try {
      if (validationResult) {
        login(credentials)
      }
    } catch (error: any) {
      setErrorMessage(error.data.errors[0])
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value } as IUserLoginCredentials)
  }

  return (
    <Form onSubmit={handleSignIn}>
      <Column>
        <InputWithIcon
          validationError={emailError}
          onChange={handleInputChange}
          onBlur={validateFormFields}
          name="email"
          placeholder="email"
          type="text"
          value={credentials.email}
        >
          <User />
        </InputWithIcon>
        <InputWithIcon
          validationError={passwordError}
          onBlur={validateFormFields}
          onChange={handleInputChange}
          name="password"
          placeholder="Password"
          value={credentials.password}
          handleVisibility={togglePasswordVisibility}
          isPasswordVisible={isPasswordVisible}
          type={isPasswordVisible ? 'text' : 'password'}
        >
          <Key />
        </InputWithIcon>
        <Row>
          <FormErrorMessage message={errorMessage} />
        </Row>
      </Column>
      <JustifyBetweenRow>
        {/* <InputCheckbox /> */}
        <Button>Sign In</Button>
      </JustifyBetweenRow>
    </Form>
  )
}

export default SigninComponent
