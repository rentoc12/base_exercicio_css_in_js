import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { GlobalStyle } from './style'
import { Container } from './container'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <GlobalStyle />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
