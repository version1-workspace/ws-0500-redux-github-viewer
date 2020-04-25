import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles/variable'

const borderStyle = `1px solid ${colors.border}`

const Container = styled.div`
  border-radius: 6px;
  border: ${borderStyle};
`

const TextArea = styled.textarea`
  padding: 8px;
  border: none;
  outline: none;
  background: none;
  font-size: 1rem;
  width: 100%;
`

const TextAreaComponent = ({ value, placeholder }) => {
  return (
    <Container>
      <TextArea value={value} placeholder={placeholder} />
    </Container>
  )
}

TextAreaComponent.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextAreaComponent
