import colors from '@/constants/colors'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  width?: string
  content?: string
}

const ButtonSC = styled.button<Pick<IProps, 'width'>>`
  font-family: 'Chillax-Regular';
  cursor: pointer;
  padding: 0.4rem 0.6rem;
  border-radius: 0.3rem;
  border: 1px solid ${colors.green.primary};
  background-color: ${colors.green.primary};
  color: ${colors.green.light};
  transition: background 0.3s ease-in-out;
  width: ${({ width }) => (width ? width : '100%')};
  &:hover {
    background-color: ${colors.blue.primary};
  }
`

const Button: React.FC<IProps> = ({ children, ...rest }) => {
  return <ButtonSC type="submit">{children}</ButtonSC>
}

export default Button
