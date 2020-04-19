import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/variable'

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
`

const TextFieldContainer = styled.div`
  width: 60%;
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
const Button = styled.a`
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: center;
  padding: 4px 16px;
  margin: 4px;
  min-width: 100px;
  border-radius: 6px;
  background ${colors.primary};
  border-bottom: 2px solid #28a745;
  color: white;
  font-size: 1rem;

  &:hover {
    background: #28a745;
    border-bottom: 2px solid #208437;
  }

  &:active {
    border-bottom: 0;
  }
`

const Action = styled.div`
  display: flex;
`

const Table = styled.div`
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

const Issue = () => {
  return (
    <Container>
      <Header>
        <Heading>
          <h2>Issue</h2>
        </Heading>
        <SearchForm>
          <TextFieldContainer>
            <TextField placeholder="issue名で検索" />
          </TextFieldContainer>
        </SearchForm>
        <Action>
          <Button>New</Button>
          <Button>Delete</Button>
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
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td className="outline">Text</td>
              <td>
                <select>
                  <option>Open</option>
                  <option>Close</option>
                </select>
              </td>
              <td>jjoo</td>
              <td>04-18 00:00</td>
              <td>04-18 00:00</td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </Container>
  )
}
export default Issue
