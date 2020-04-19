import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/variable'

const Container = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  width: 100%;
  background: ${colors.black};
  color: white;
`

const Logo = styled.div``
const Menu = styled.div`
  padding: 8px;
  font-size: 1.2rem;
`

const Title = styled.h1``

const Header = () => {
  return (
    <Container>
      <Logo>
        <Title>Github Viewer</Title>
      </Logo>
      <Menu>
        <i className="fa fa-bars" />
      </Menu>
    </Container>
  )
}

export default Header
