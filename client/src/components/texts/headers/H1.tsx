import colors from '@/constants/colors'
import { ITextComponentProps } from '@/models'
import React from 'react'
import styled from 'styled-components'

const H1Styled = styled.h1<Omit<ITextComponentProps, 'children'>>`
  color: ${({ color }) => (color ? color : colors.blue.primary)};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'auto')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  margin: ${({ margin }) => (margin ? margin : '0')};
`
const H1: React.FC<ITextComponentProps> = ({ children, ...rest }) => {
  return <H1Styled {...rest}>{children}</H1Styled>
}

export default H1