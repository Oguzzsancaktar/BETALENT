import React from 'react'
import styled from 'styled-components'

interface IProps {
  background?: string
  minHeight?: string
}
const Container = styled.div<Pick<IProps, 'background' | 'minHeight'>>`
  padding: 1rem 2rem;
  margin: auto;
  width: calc(100% - 2rem);
  max-width: 500px;
  height: 100%;
  background: ${({ background }) => background && background};
  min-height: ${({ minHeight }) => minHeight && minHeight};
`
const FormWrapper: React.FC<IProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}

export default FormWrapper
