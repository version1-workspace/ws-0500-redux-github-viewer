import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles/variable'

const borderStyle = `1px solid ${colors.border}`

const Container = styled.div`
  border-radius: 6px;
  border: ${borderStyle};
`
const TextField = styled.input`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
`
const TextFieldComponent = ({ value, placeholder }) => {
  return (
    <Container className="text-field-container">
      <TextField type="input" value={value} placeholder={placeholder} />
    </Container>
  )
}

TextFieldComponent.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextFieldComponent
