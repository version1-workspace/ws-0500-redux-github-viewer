import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IndexTab from '../components/templates/Index'
import IssueTab from '../components/templates/Issue'
import PullRequestTab from '../components/templates/PullRequest'
import Header from '../components/organisms/Header'
import TabHeader from '../components/organisms/TabHeader'

const tabs = [
  {
    key: 'top',
    label: 'Top',
    to: '/'
  },
  {
    key: 'issue',
    label: 'Issue',
    to: '/issue'
  },
  {
    key: 'pull-requests',
    label: 'Pull Request',
    to: '/pull-requests'
  }
]

const Container = styled.div``
const Content = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`

const Index = () => {
  const [selected, setSelected] = useState('top')
  return (
    <Container>
      <Header />
      <Content>
        <Router>
          <TabHeader selected={selected} onChange={setSelected} tabs={tabs} />
          <Switch>
            <Route path="/issue">
              <IssueTab />
            </Route>
            <Route path="/pull-requests">
              <PullRequestTab />
            </Route>
            <Route path="/">
              <IndexTab />
            </Route>
          </Switch>
        </Router>
      </Content>
    </Container>
  )
}

export default Index
