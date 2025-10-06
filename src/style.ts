import { createGlobalStyle } from 'styled-components'

export const cores = {
  corPrincipal: '#a7727d',
  corSecundaria: '#f9f5e7'
}

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
}

body {
  padding-bottom: 120px;
}


`
