import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import IndexTab from '../components/templates/Index'
import IssueTab from '../components/templates/Issue'
import PullRequestTab from '../components/templates/PullRequest'

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

const Index = () => (
  <div>
    <Router>
      <ul>
        {tabs.map(({ key, to, label }) => {
          return (
            <li key={key}>
              <Link to={to}>{label}</Link>
            </li>
          )
        })}
      </ul>
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
  </div>
)

export default Index
