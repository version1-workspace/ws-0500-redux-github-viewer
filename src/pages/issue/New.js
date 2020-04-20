import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../../components/atoms/Button'

const Container = styled.div`
  max-width: 598px;
  margin: auto;
  a {
    width: auto;
  }
`
const Form = styled.div`
  padding: 32px 0;
`
const Field = styled.div`
  padding: 16px;
`
const Label = styled.label`
  display: block;
`
const TextField = styled.input`
  width: 100%;
`
const TextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
`
const Footer = styled.div`
  display: flex;
  align-items: center;
`

const IssueNew = (props) => {
  const history = useHistory()
  return (
    <Container>
      <h2>New Issue</h2>
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
        <Button type="primary">作成</Button>
        <a href="!#" onClick={history.goBack}>
          戻る
        </a>
      </Footer>
    </Container>
  )
}

IssueNew.propTypes = {
  history: PropTypes.object
}

export default IssueNew
