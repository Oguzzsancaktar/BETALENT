import React, { useState } from 'react'
import 'flatpickr/dist/themes/material_green.css'
import '@/styles/vendors/flat-picker.css'
import Flatpickr from 'react-flatpickr'
import { Clock } from 'react-feather'
import { Column, Row } from '../layout'
import { Container, IconContainer } from '../input/InputWithIcon/styled'
import colors from '@/constants/colors'
import { ItemContainer } from '../item-container'
import { Label } from '../texts'
import { Moment } from 'moment'

interface IProps {
  name?: string
  labelText?: string | null
  validationError?: boolean
  value?: Date | Moment
  disabled?: boolean
  onChange: (value: Date[], dateText: string) => void
}

export interface IStyledProps {
  validationError?: boolean
  disabled?: boolean
}

const DatePicker: React.FC<IProps> = ({ name, value = '', disabled, labelText, validationError, onChange }) => {
  
  const handleDateChange = (date: Date[], dateText) => {
    onChange(date, dateText)
  }

  return (
    <Column>
      {labelText && (
        <ItemContainer margin="0 0 0.4rem 0">
          <Label color={colors.black.primary}>{labelText}</Label>{' '}
        </ItemContainer>
      )}
      <Row>
        <Column>
          <Container validationError={validationError}>
            <Row>
              <IconContainer disabled={disabled} validationError={validationError}>
                <Clock size={20} />
              </IconContainer>
              <Flatpickr
                name={name}
                options={{
                  enableTime: false,
                  dateFormat: 'M/d/Y'
                }}
                disabled={disabled}
                onChange={handleDateChange}
                placeholder="Doğum Tarihi"
              />
            </Row>
          </Container>
        </Column>
      </Row>
    </Column>
  )
}

export default DatePicker
