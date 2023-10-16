import './App.scss'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Container from 'react-bootstrap/Container'
import Page from './components/Page'

function App () {
  return (
    <>
      <Container fluid className='p-0'>
        <Page />
        <Footer />
      </Container>
    </>
  )
}

export default App
