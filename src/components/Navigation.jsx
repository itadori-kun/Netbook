import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../assets/logo.svg'
import searchIcon from '../assets/searchBtn.svg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Navigation = () => {
  return (
    <Container fluid className='navigation border-bottom p-0'>
      <Container className='py-3 px-0'>
        <Navbar expand='lg' className=' bg-transparent'>
          <Container className='d-flex align-items-center'>
            <Navbar.Brand href='#home' className='d-flex align-items-center '>
              <img
                src={logo}
                width='34'
                height='34'
                className='d-inline-block align-top me-2'
                alt='Netbook'
              />
              Netbook
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto mb-4 mb-lg-0'>
                <Nav.Link href='#home' className='px-3 mt-3 mt-lg-auto'>
                  Home
                </Nav.Link>
                <NavDropdown title='Community' id='basic-nav-dropdown' className='px-3'>
                  <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.2'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action/3.3'>
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#blog' className='px-3'>
                  Blog
                </Nav.Link>
                <Nav.Link href='#events' className='px-3'>
                  Events
                </Nav.Link>
              </Nav>
              <Form inline>
                <Row>
                  <Col xs='auto d-none d-lg-block'>
                    <div className='d-flex align-item-center juscoce border-bottom w-75 ms-5'>
                      <img
                        src={searchIcon}
                        alt=''
                        className='position-relative search'
                      />
                      <input
                        type='text'
                        placeholder='Search here ...'
                        className='border-0 py-1 px-2 w-75 bg-transparent'
                      />
                    </div>
                  </Col>
                  <Col xs='auto'>
                    <Button type='submit' className='px-4'>
                      Log in
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </Container>
  )
}

export default Navigation
