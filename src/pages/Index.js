import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './Profile'
import IndexTab from '../components/templates/Index'
import IssueTab from '../containers/IssueTab'
import PullRequestTab from '../components/templates/PullRequest'
import Header from '../components/organisms/Header'
import TabHeader from '../components/organisms/TabHeader'
import IssueNew from '../pages/issue/New'

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

const Tabs = [
  {
    path: '/issue',
    component: <IssueTab />
  },
  {
    path: '/pull-requests',
    component: <PullRequestTab />
  },
  {
    path: '/',
    component: <IndexTab />
  }
]

const Index = () => {
  const [selected, setSelected] = useState('top')
  useEffect(() => {
    if (!window.location) {
      return
    }
    const tab = tabs.find((item) => item.to === window.location.pathname)
    if (tab) {
      setSelected(tab.key)
    }
  }, [setSelected])
  return (
    <Container>
      <Header />
      <Content>
        <Router>
          <Switch>
            <Route path="/issue/new">
              <IssueNew />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            {Tabs.map((item) => (
              <Route key={item.path} path={item.path}>
                <TabHeader
                  selected={selected}
                  onChange={setSelected}
                  tabs={tabs}
                />
                {item.component}
              </Route>
            ))}
          </Switch>
        </Router>
      </Content>
    </Container>
  )
}

export default Index
