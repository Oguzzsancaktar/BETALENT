import React from 'react'
import styled from 'styled-components'
import { Figure, Picture, Image } from './Styled'

interface ICircleImageProps {
  size: string
  source: string
  borderColor?: string
}

const CircleContainer = styled.div<Pick<ICircleImageProps, 'size' | 'borderColor'>>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  ${({ borderColor }) => borderColor && `border: 1px solid ${borderColor}`};

  overflow: hidden;
  border-radius: 50%;
  padding: 1.5rem;
`

const CircleImage: React.FC<ICircleImageProps> = ({ source, ...rest }) => {
  return (
    <CircleContainer {...rest}>
      <Figure>
        <Picture>
          <Image src={source} />
        </Picture>
      </Figure>
    </CircleContainer>
  )
}

export default CircleImage
