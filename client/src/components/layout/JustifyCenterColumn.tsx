import React from 'react'
import styled from 'styled-components'

interface IProps {
  margin?: string
  padding?: string
  height?: string
  background?: string
  minHeight?: string
}
const JustifyCenterColumnStyled = styled.div<IProps>`
  margin: ${({ margin }) => margin && margin};
  padding: ${({ padding }) => padding && padding};
  height: ${({ height }) => (height ? height : 'auto')};
  background: ${({ background }) => (background ? background : 'transparent')};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
  background-size: cover;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const JustifyCenterColumn: React.FC<IProps> = ({ children, ...rest }) => {
  return <JustifyCenterColumnStyled {...rest}>{children}</JustifyCenterColumnStyled>
}

export default JustifyCenterColumn
