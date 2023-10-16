import React from 'react'
import Nav from 'react-bootstrap/Nav'
import logo from '../images/logo.svg'
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn
} from 'react-icons/fa'
import Container from 'react-bootstrap/Container'

const Footer = () => {
  return (
    <Container fluid className='footer'>
      <Container>
        <Nav justify className='align-items-sm-center'>
          <Nav.Item>
            <Nav.Link
              href='/home'
              className='lh-lg text-start fw-semibold logoText d-flex align-items-sm-center'
            >
              <img
                src={logo}
                width='34'
                height='34'
                className='d-inline-block align-top me-1'
                alt='Netbook'
              />
              Netbook
            </Nav.Link>
          </Nav.Item>
          <div className='d-grid mini-nav d-md-flex d-'>
              <Nav.Item>
                <Nav.Link eventKey='link-1' className='lh-lg fw-medium'>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-2' className='lh-lg fw-medium'>
                  Resources
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-3' className='lh-lg fw-medium'>
                  Community
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-4' className='lh-lg fw-medium'>
                  Members
                </Nav.Link>
              </Nav.Item>
          </div>
          <Nav.Item className='d-flex align-items-center justify-content-center socialIcons'>
            <div className='d-md-flex d-sm-grid w-inherit gap-2'>
              <Nav.Link href='#event1' className='p-1 bg-white rounded-circle'>
                <FaTwitter className='text-dark' />
              </Nav.Link>
              <Nav.Link href='#event2' className='p-1 bg-white rounded-circle'>
                <FaInstagram className='text-dark' />
              </Nav.Link>
              <Nav.Link href='#event3' className='p-1 rounded-circle bg-white'>
                <FaFacebookF className='text-dark' />
              </Nav.Link>
              <Nav.Link href='#event4' className='p-1 rounded-circle bg-white'>
                <FaLinkedinIn className='text-dark' />
              </Nav.Link>
            </div>
          </Nav.Item>
        </Nav>
      </Container>
    </Container>
  )
}

export default Footer
