import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
    font-size: 14px;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  h1 {
    font-size: 2rem;
  }
`
