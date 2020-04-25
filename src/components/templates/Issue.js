import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { colors } from '../../styles/variable'
import Button from '../atoms/Button'
import TextField from '../atoms/TextField'
import NewIssue from '../templates/NewIssue'

const borderStyle = `1px solid ${colors.border}`

const Container = styled.div`
  padding: 16px;
  margin-top: 16px;
`

const Content = styled.div``
const Header = styled.div`
  display: flex;
  align-items: center;
`
const Heading = styled.div``
const SearchForm = styled.div`
  padding: 8px 16px;
  display: flex;
  width: 100%;

  .text-field-container {
    width: 100%;
  }
`

const Action = styled.div`
  display: flex;
`

const Table = styled.table`
  border: ${borderStyle};
  border-radius: 6px;
  .outline {
    width: 140rem;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    min-width: 10rem;
    border-bottom: ${borderStyle};
  }

  th:first-child,
  td:first-child {
    min-width: auto;
  }

  .no-divider {
    border-bottom: 0;
  }
`

const Issue = ({ data, showModal, addIssue, removeModal }) => {
  const onNew = useCallback(() => {
    const onAdd = (payload) => {
      addIssue(payload)
      removeModal()
    }
    showModal({
      component: <NewIssue onSubmit={onAdd} onClose={removeModal} />
    })
  }, [showModal, removeModal, addIssue])

  const list = useMemo(() => Object.values(data), [data])
  return (
    <Container>
      <Header>
        <Heading>
          <h2>Issue</h2>
        </Heading>
        <SearchForm>
          <TextField placeholder="issue名で検索" />
        </SearchForm>
        <Action>
          <Button type="primary" onClick={onNew}>
            New
          </Button>
          <Button type="danger">Delete</Button>
        </Action>
      </Header>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th></th>
              <th>Status</th>
              <th>Asignee</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {list.map(
              ({ id, title, status, assignee, createdAt, updatedAt }) => (
                <tr key={id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="outline">{title}</td>
                  <td>
                    <select value={status}>
                      <option value="0">Open</option>
                      <option value="1">Close</option>
                    </select>
                  </td>
                  <td>{assignee}</td>
                  <td>{dayjs(createdAt).format('MM-DD-YYYY')}</td>
                  <td>{dayjs(updatedAt).format('MM-DD-YYYY')}</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Content>
    </Container>
  )
}

Issue.propTypes = {
  data: PropTypes.object,
  showModal: PropTypes.func,
  removeModal: PropTypes.func,
  addIssue: PropTypes.func,
  removeIssue: PropTypes.func,
  updateIssue: PropTypes.func
}

export default Issue
