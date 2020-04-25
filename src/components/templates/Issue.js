import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles/variable'
import Button from '../atoms/Button'
import TextField from '../atoms/TextField'
import IssueItem from '../organisms/IssueItem'
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

const ids2Obj = (ids) => {
  return ids.reduce((acc, id) => {
    return { ...acc, [id]: true }
  }, {})
}

const Issue = ({ data, user, showModal, addIssue, removeModal }) => {
  const list = useMemo(() => Object.values(data), [data])
  const [checkedIds, setCheckedIds] = useState({})

  const onCheckAll = useCallback(() => {
    if (Object.keys(checkedIds).length === Object.keys(data).length) {
      setCheckedIds({})
      return
    }
    const ids = ids2Obj(Object.keys(data))
    setCheckedIds(ids)
  }, [checkedIds, data])

  const onCheck = useCallback(
    ({ id }) => {
      const newIds = { ...checkedIds }
      if (checkedIds[id]) {
        delete newIds[id]
      } else {
        newIds[id] = true
      }
      setCheckedIds(newIds)
    },
    [checkedIds]
  )

  const onNew = useCallback(() => {
    const onAdd = (payload) => {
      addIssue(payload)
      removeModal()
    }
    showModal({
      component: <NewIssue user={user} onSubmit={onAdd} onClose={removeModal} />
    })
  }, [user, showModal, removeModal, addIssue])

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
                <input type="checkbox" onClick={onCheckAll} />
              </th>
              <th></th>
              <th>Status</th>
              <th>Asignee</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {list.length ? (
              list.map((item) => {
                return (
                  <IssueItem
                    key={item.id}
                    issue={item}
                    checked={checkedIds[item.id]}
                    onCheck={onCheck}
                  />
                )
              })
            ) : (
              <></>
            )}
            {!list.length && (
              <tr>
                <td colSpan="6">データがありません</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Content>
    </Container>
  )
}

Issue.propTypes = {
  data: PropTypes.object,
  user: PropTypes.object,
  showModal: PropTypes.func,
  removeModal: PropTypes.func,
  addIssue: PropTypes.func,
  removeIssue: PropTypes.func,
  updateIssue: PropTypes.func
}

export default Issue
