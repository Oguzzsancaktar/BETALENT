import React from 'react'
import { Column, Row } from '@components/index'
import Select from 'react-select'
import styled from 'styled-components'
import { IconContainer } from '../InputWithIcon/styled'
import colors from '@/constants/colors'

interface IProps {
  labelText?: string
  selectedOption?: number
  isDisabled?: boolean
  isLoading?: boolean
  isClearable?: boolean
  isSearchable?: boolean
  isMulti?: boolean
  validationError?: boolean
  onChange: (event: React.ChangeEvent) => void
  name: string
  options: any[]
}
const SelectItem = styled.div<Pick<IProps, 'validationError'>>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ validationError }) => (validationError ? colors.red.primary : colors.gray.primary)};
  color: ${({ validationError }) => (validationError ? colors.red.primary : colors.gray.primary)};
  margin-bottom: 0.5rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${colors.blue.primary};
  }

  &:focus-within {
    border-bottom: 1px solid ${colors.blue.primary};
    color: ${colors.gray.primary};
  }
`

const ColoredIconContainer: any = styled(IconContainer)`
  color: ${colors.gray.primary};
`

const SelectInputWithIcon: React.FC<IProps> = ({
  children,
  selectedOption,
  isDisabled,
  isLoading,
  isClearable,
  isSearchable,
  isMulti,
  name,
  labelText,
  validationError,
  onChange,
  options
}) => {
  return (
    <Column>
      {labelText && <Row>{labelText}</Row>}
      <SelectItem validationError={validationError}>
        <ColoredIconContainer>{children}</ColoredIconContainer>
        <Select
          className="react-basic-single"
          classNamePrefix="select"
          options={options}
          defaultValue={options[selectedOption || 0]}
          value={selectedOption ? options[selectedOption] : null}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isSearchable={isSearchable}
          name={name}
          isMulti={isMulti}
          onChange={onChange}
          placeholder="Yaşadığınız şehir"
        />
      </SelectItem>
    </Column>
  )
}

export default SelectInputWithIcon
