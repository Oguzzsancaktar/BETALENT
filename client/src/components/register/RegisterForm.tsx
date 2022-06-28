import React, { useState } from 'react'
import {
  Button,
  Column,
  Form,
  InputWithIcon,
  JustifyBetweenColumn,
  Row,
  JustifyCenterRow,
  FormErrorMessage,
  HexagonImage,
  SelectInputWithIcon,
} from '@components/index'
import { Gift, Mail, MapPin, PhoneCall, UserCheck, UserX } from 'react-feather'
import { IRegister } from '@/models'
import { useCreateRegisterMutation } from '@/services/registerService'
import { isBirthdayValid, isEmailValid, isInputStringValid, isPhoneValid } from '@/utils/validationUtils'
import colors from '@/constants/colors'
import { toastError, toastSuccess } from '@/utils/toastUtil'
import cityOptions from '@/constants/cities'
import { DatePicker } from '../date-picker'
import moment from 'moment'

const RegisterForm = () => {
  const [createRegister, {isLoading:isSubmitLoading}] = useCreateRegisterMutation()
  const [birthday,setBirthday] = useState('')
  const [firstnameError, setFirstnameError] = useState(false)
  const [lastnameError, setLastnameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [birthdayError, setBirthdayError] = useState(false)
  const [cityError, setCityError] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')

  const [registerData, setRegisterData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    city: ''
  })

  const validateFormFields = (): boolean => {
    setFirstnameError(false)
    setLastnameError(false)
    setPhoneError(false)
    setEmailError(false)
    setBirthdayError(false)
    setCityError(false)
    setErrorMessage('')

    if (!isInputStringValid(registerData.firstname)) {
      setErrorMessage('Lütfen adınızı giriniz.')
      setFirstnameError(true)
      return false
    }

    if (!isInputStringValid(registerData.lastname)) {
      setErrorMessage('Lütfen soyadınızı giriniz.')
      setLastnameError(true)
      return false
    }

    if (!isPhoneValid(registerData.phone)) {
      setErrorMessage('Lütfen geçerli bir telefon numarası giriniz.')
      setPhoneError(true)
      return false
    }

    if (!isEmailValid(registerData.email)) {
      setErrorMessage('Lütfen geçerli E-posta adresi giriniz.')
      setEmailError(true)
      return false
    }

    // if (!isBirthdayValid(registerData.birthday)) {
    //   setErrorMessage('Lütfen doğum tarihinizi giriniz.')
    //   setBirthdayError(true)
    //   return false
    // }

    if (!isInputStringValid(registerData.city)) {
      setErrorMessage('Lütfen yaşadığınız şehiri seçiniz')
      setCityError(true)
      return false
    }

    return true
  }

  const handleSelectChange = (e: any) => {
        const dataInstance = { ...registerData }
        dataInstance.city = e.value
    setRegisterData(dataInstance)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const dataInstance = { ...registerData }
    dataInstance[e.target.name] = e.target.value 
    setRegisterData(dataInstance)
  }

  const handleDateChange = (date: any, dateString: string) => {
    setBirthday(dateString)
  }

  const handleRegisteration = async (e: React.MouseEvent) => {
    e.preventDefault()

    const validationResult = validateFormFields()

    try {
      if (validationResult) {
try {
  await createRegister({...registerData, birthday})

  toastSuccess(registerData.firstname + ' ' + registerData.lastname + ' başarı ile kaydınız oluşturuldu.')
  setRegisterData({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    city: ''
  })
  setBirthday('')
} catch (error) {
  console.log(error);
  
}
         
      }
    } catch (error: any) {
      setErrorMessage(error.data.errors[0])
    }
  }

  return (
    <Form>
      <JustifyBetweenColumn>
        <JustifyCenterRow margin="0px 0px 5rem 0px">
          <HexagonImage
            size="200px"
            background={colors.blue.primary}
            borderColor={colors.black.primary}
            source={window.location.origin + '/assets/images/logo-black-centered.png'}
          />
        </JustifyCenterRow>

        <Column>
          <InputWithIcon
            value={registerData.firstname}
            validationError={firstnameError}
            name="firstname"
            onBlur={() => console.log('blurred')}
            onChange={handleInputChange}
            placeholder="Ad"
            type="text"
            children={<UserCheck />}
          />
          <InputWithIcon
            value={registerData.lastname}
            validationError={lastnameError}
            name="lastname"
            onBlur={() => console.log('blurred')}
            onChange={handleInputChange}
            placeholder="Soyad"
            type="text"
            children={<UserX />}
          />
          <InputWithIcon
            value={registerData.phone}
            validationError={phoneError}
            name="phone"
            onBlur={() => console.log('blurred')}
            onChange={handleInputChange}
            placeholder="Telefon Numarası"
            type="text"
            children={<PhoneCall />}
          />
          <InputWithIcon
            value={registerData.email}
            validationError={emailError}
            name="email"
            onBlur={() => console.log('blurred')}
            onChange={handleInputChange}
            placeholder="E - posta"
            type="text"
            children={<Mail />}
          />

          <DatePicker
            name="birthday"
            onChange={handleDateChange}
            validationError={birthdayError}
            value={moment(birthday, 'YYYY-MM-DD')}
          />

          <SelectInputWithIcon
            
            name="livingCity"
            selectedOption={cityOptions.findIndex(option => option.value === registerData.city)}
            options={cityOptions}
            isClearable={true}
            isSearchable={true}
            children={<MapPin />}
            validationError={cityError}
            onChange={handleSelectChange}
          />

          <Row>
            <FormErrorMessage message={errorMessage} />
          </Row>
        </Column>

        <JustifyCenterRow margin="2rem 0px 0px 0px">
          <Button disabled={isSubmitLoading} onClick={handleRegisteration}>
            BAŞVUR
          </Button>
        </JustifyCenterRow>
      </JustifyBetweenColumn>
    </Form>
  )
}
export default RegisterForm
