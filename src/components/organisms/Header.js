import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/variable'
import DropDown from './DropDown'

const Container = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  width: 100%;
  background: ${colors.black};
  color: white;
`

const Logo = styled.div`
  a {
    color: white;
  }
`
const Menu = styled.div`
  padding: 8px;
  font-size: 1.2rem;
`

const Title = styled.h1``

const menu = [
  { to: '/', label: 'Top' },
  { to: '/profile', label: 'Your Profile' },
  { to: '/issue', label: 'Issue' },
  { to: '/pull-requests', label: 'Pull Request' }
]

const Header = () => {
  return (
    <Container>
      <Logo>
        <a href="/">
          <Title>Github Viewer</Title>
        </a>
      </Logo>
      <Menu>
        <DropDown menu={menu} />
      </Menu>
    </Container>
  )
}

export default Header
