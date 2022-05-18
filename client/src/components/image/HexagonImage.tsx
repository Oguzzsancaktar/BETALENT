import colors from '@/constants/colors'
import React from 'react'
import styled from 'styled-components'
import { Figure, Picture, Image } from './Styled'

interface IHexagonImageProps {
  size: string
  source: string
  borderColor?: string
  background?: string
}

const HexagonContainer = styled.div<Pick<IHexagonImageProps, 'size' | 'borderColor' | 'background'>>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  ${({ borderColor }) => borderColor && `border: 1px solid ${borderColor}`};
  ${({ background }) => background && `background-color: ${background}`};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  -webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
`

const HexagonImage: React.FC<IHexagonImageProps> = ({ source, ...rest }) => {
  return (
    <HexagonContainer {...rest}>
      <Figure>
        <Picture>
          <Image size="60%" src={source} />
        </Picture>
      </Figure>
    </HexagonContainer>
  )
}

export default HexagonImage
