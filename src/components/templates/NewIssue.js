import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '../../components/atoms/TextField'
import TextArea from '../../components/atoms/TextArea'
import Button from '../../components/atoms/Button'
import LabelButton from '../../components/atoms/LabelButton'

const Container = styled.div`
  max-width: 598px;
  margin: auto;
  a {
    width: auto;
  }

  textarea {
    min-height: 150px;
  }
`

const Title = styled.h2`
  padding: 0 8px;
`

const Form = styled.div`
  padding: 32px 0;
`
const Field = styled.div`
  padding: 16px;
`
const Label = styled.label`
  display: block;
  padding: 8px 0;
`
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
`

const NewIssue = ({ onSubmit, onClose }) => {
  return (
    <Container>
      <Title>New Issue</Title>
      <Form>
        <Field>
          <Label>Title</Label>
          <TextField />
        </Field>
        <Field>
          <Label>Description</Label>
          <TextArea />
        </Field>
      </Form>
      <Footer>
        <Button type={onSubmit}>作成</Button>
        <LabelButton onClick={onClose}>閉じる</LabelButton>
      </Footer>
    </Container>
  )
}

NewIssue.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func
}

export default NewIssue
