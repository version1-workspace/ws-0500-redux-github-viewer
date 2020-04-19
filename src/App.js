import React from 'react'
import { GlobalStyle } from './styles'
import Pages from './pages/Index'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <Pages />
    </Router>
  </>
)

export default App
