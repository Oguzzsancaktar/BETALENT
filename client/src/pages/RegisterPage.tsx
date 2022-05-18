import React from 'react'
import {
  CircleImage,
  JustifyBetweenRow,
  JustifyCenterColumn,
  PageWrapper,
  RegisterForm,
  FormWrapper,
  HexagonImage
} from '@/components'
import colors from '@/constants/colors'
import { url } from 'inspector'
import styled from 'styled-components'

const Left = styled(JustifyCenterColumn)`
  @media (max-width: 768px) {
    display: none;
  }
`
const Right = styled(FormWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
  }
`
const RegisterPage = () => {
  return (
    <PageWrapper>
      <JustifyBetweenRow minHeight="100vh">
        <Left
          height="100%"
          minHeight="100vh"
          background={`url(${window.location.origin + '/assets/images/register-background.svg'})`}
        >
          <HexagonImage
            size="200px"
            borderColor={colors.black.primary}
            background={colors.black.primary}
            source={window.location.origin + '/assets/images/logo-white-centered.png'}
          />
        </Left>
        <Right minHeight={'100vh'} background={colors.black.primary}>
          <JustifyCenterColumn height="100%">
            <RegisterForm />
          </JustifyCenterColumn>
        </Right>
      </JustifyBetweenRow>
    </PageWrapper>
  )
}

export default RegisterPage
