import { Column, Row } from '@/components/layout'
import styled from 'styled-components'
import { Container, IconContainer } from './styled'
import DatePicker from 'react-datepicker'

interface Props {
  placeholder: string
  name: string
  validationError?: boolean
  startDate?: Date | null
  labelText?: string
  selectedDate?: string
  onChange: (event: any) => void
}

const Label = styled.label`
  width: 100%;
  text-align: start;
  margin-bottom: 0.4rem;
`

const DatepickerWithIcon: React.FC<Props> = ({
  children,
  validationError,
  startDate,
  labelText,
  selectedDate,
  placeholder,
  onChange,
  ...rest
}) => {
  return (
    <Column>
      {labelText && <Label>{labelText}</Label>}
      <Container validationError={validationError}>
        <Row>
          <IconContainer>{children}</IconContainer>
          <DatePicker
            value={selectedDate}
            className="react-custom-datepicker"
            selected={startDate}
            placeholderText={placeholder}
            onChange={onChange}
          />
        </Row>
      </Container>
    </Column>
  )
}

export default DatepickerWithIcon
