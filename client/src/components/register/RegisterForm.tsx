import React, { useState } from 'react'
import {
  Button,
  Column,
  Form,
  InputWithIcon,
  JustifyBetweenColumn,
  CircleImage,
  Row,
  JustifyBetweenRow,
  JustifyCenterRow
} from '@components/index'
import { Gift, Mail, MapPin, PhoneCall, User, UserCheck, UserX } from 'react-feather'
import { IRegister } from '@/models'

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState<IRegister>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    birthday: '',
    city: ''
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }
  const handleRegisteration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('registerData', registerData)
  }

  return (
    <Form onSubmit={handleRegisteration}>
      <JustifyBetweenColumn>
        <Column>
          <InputWithIcon
            name="firstName"
            onBlur={() => console.log('blurred')}
            onChange={handleInputChange}
            placeholder="first name"
            type="text"
            children={<UserCheck />}
          />
          <InputWithIcon
            name="lastName"
            onBlur={() => console.log('blurred')}
            onChange={handleInputChange}
            placeholder="last name"
            type="text"
            children={<UserX />}
          />
          <InputWithIcon
            name="phoneNumber"
            onBlur={() => console.log('blurred')}
            onChange={handleInputChange}
            placeholder="phone name"
            type="text"
            children={<PhoneCall />}
          />
          <InputWithIcon
            name="email"
            onBlur={() => console.log('blurred')}
            onChange={handleInputChange}
            placeholder="email name"
            type="text"
            children={<Mail />}
          />
          <InputWithIcon
            name="birthday"
            onBlur={() => console.log('blurred')}
            onChange={handleInputChange}
            placeholder="birthday"
            type="text"
            children={<Gift />}
          />
          <InputWithIcon
            name="city"
            onBlur={() => console.log('blurred')}
            onChange={handleInputChange}
            placeholder="city"
            type="text"
            children={<MapPin />}
          />
        </Column>

        <JustifyCenterRow margin="2rem 0px 0px 0px">
          <Button>Submit</Button>
        </JustifyCenterRow>
      </JustifyBetweenColumn>
    </Form>
  )
}
export default RegisterForm
