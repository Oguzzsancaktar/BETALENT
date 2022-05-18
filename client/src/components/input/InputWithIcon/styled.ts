import colors from '@/constants/colors'
import { RowStyled } from '@/shared'
import styled from 'styled-components'
import { IStyledProps } from './types'

export const Container = styled(RowStyled)<IStyledProps>`
  border-bottom: 1px solid ${({ validationError }) => (validationError ? colors.red.primary : colors.gray.primary)};
  color: ${({ validationError }) => (validationError ? colors.red.primary : colors.gray.primary)};
  margin-bottom: 0.5rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${colors.blue.primary};
  }

  &:focus-within {
    border-bottom: 1px solid ${colors.blue.primary};
    color: ${colors.gray.primary};
  }
`
export const Input = styled.input<Pick<IStyledProps, 'validationError'>>`
  color: ${({ validationError }) => (validationError ? colors.red.primary : colors.gray.primary)};
  width: 100%;
  height: 40px;
  background-color: transparent;
  outline: none;
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.3rem;
  transition: all 0.4s ease-in-out;

  &:focus {
    color: ${colors.gray.primary};
  }

  &::placeholder {
    color: ${colors.gray.primary};
  }
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-bottom: 0.3rem;
`
