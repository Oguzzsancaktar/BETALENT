import colors from '@/constants/colors'
import styled from 'styled-components'
import { IStyledProps } from './types'

export const Input = styled.input<IStyledProps>`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${({ validationError }) => (validationError ? colors.red.primary : colors.blue.primary)};
  background-color: transparent;
  transition: border 0.3s ease-in-out;
  outline: none;
  padding: 0rem 0.4rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-weight: 400;
  font-family: 'Satoshi-Variable';
  &:hover,
  &:focus {
    border-color: ${colors.blue.primary};
  }

  &:disabled {
    background-color: ${colors.black.primary};
  }

  &::placeholder {
    color: ${colors.blue.primary};
  }
`
