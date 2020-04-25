import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Profile from './pages/Profile'
import Index from './pages/Index'
import Header from './components/organisms/Header'
import Modal from './containers/Modal'

const Container = styled.div``
const Content = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`

const App = () => {
  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Header />
        <Content>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        </Content>
        <Modal />
      </Container>
    </Router>
  )
}

export default App
