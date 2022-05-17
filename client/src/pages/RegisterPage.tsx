import React from 'react'
import {
  CircleImage,
  JustifyBetweenRow,
  JustifyCenterColumn,
  PageWrapper,
  RegisterForm,
  FormWrapper
} from '@/components'
import colors from '@/constants/colors'

const RegisterPage = () => {
  return (
    <PageWrapper>
      <JustifyBetweenRow height="100vh">
        <JustifyCenterColumn height="100%">
          <CircleImage
            size="150px"
            borderColor={colors.black.primary}
            source={window.location.origin + '/assets/images/logo.png'}
          />
        </JustifyCenterColumn>
        <FormWrapper background={colors.black.primary}>
          <JustifyCenterColumn height="100%">
            <RegisterForm />
          </JustifyCenterColumn>
        </FormWrapper>
      </JustifyBetweenRow>
    </PageWrapper>
  )
}

export default RegisterPage
