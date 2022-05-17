import { RowStyled } from '@/shared'
import React from 'react'

interface IProps {}
const Row: React.FC<IProps> = ({ children, ...rest }) => {
  return <RowStyled>{children}</RowStyled>
}

export default Row
