import React from 'react'
import styled from 'styled-components'

interface Props {
  height?: string
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

interface IFormProps {
  height?: string
}

const FormSC = styled.form<IFormProps>`
  width: 100%;
  height: ${({ height }) => (height ? height : 'auto')};
`
const Form: React.FC<Props> = ({ children, onSubmit, ...rest }) => {
  return (
    <FormSC {...rest} onSubmit={onSubmit}>
      {children}
    </FormSC>
  )
}

export default Form
