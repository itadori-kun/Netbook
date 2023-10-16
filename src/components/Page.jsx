import React from 'react'
import Navigation from './Navigation'
// import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import hero from '../images/hero.svg'
import meeting from '../images/meeting.svg'
import work from '../images/work.svg'
import connect from '../images/connect.svg'
import team1 from '../images/team2.png'
import team2 from '../images/team3.png'
import team3 from '../images/team4.png'
import team11 from '../images/team1.png'
import ellipse from '../images/Ellipse.png'
import star from '../images/starIcon.svg'
import trophy from '../images/trophy.svg'
import ellipse13 from '../images/Ellipse13.svg'
import ellipse14 from '../images/Ellipse14.png'
import ellipse15 from '../images/Ellipse15.png'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import arrowIcon from '../images/arrowRightColored.svg'
import arrow from '../images/arrowWhite.svg'
import arrowIcon2 from '../images/arrowRightGrey.svg'

const Page = () => {
  return (
    <Container fluid className='p-0'>
      <section className='mainHero px-md-0 px-3'>
        <Navigation />

        <Container className='p-0'>
          <section className='heroSection d-md-flex align-items-sm-center justify-content-sm-between p-sm-0 p-md-4'>
            <div className='heroDetails'>
              <div className='note text-sm-center rounded-3 mb-lg-3 mb-sm-2'>
                <p className='m-sm-0 fw-medium'>Netbook Community</p>
              </div>
              <h1 className='mb-sm-3 text-capitalize fw-bold '>
                your solutions for community!
              </h1>
              <p className='heroParagraph fw-normal w-lg-75 w-sm-100'>
                More than 2 billion people in over countries use socibook to
                stay in touch with friends & family
              </p>
              <div className='d-flex heroLinks'>
                <a className='py-lg-4 px-lg-4 px-md-3 py-md-3 me-3 mb-md-0 px-sm-4 py-sm-4  rounded-3 text-sm-center 
                text-decoration-none fw-medium'>
                  <p href='#' className='mb-0 '>
                    About More
                  </p>
                </a>
                <a
                  href='#'
                  className='py-lg-4 px-lg-4 px-md-3 py-md-3 mb-md-0 px-sm-4 py-sm-4 rounded-3 text-sm-center text-decoration-none fw-medium'
                >
                  <p className=' mb-0'>Invite Friend</p>
                </a>
              </div>
            </div>
            <div className='heroAvatars d-sm-none d-md-block'>
              <img
                src={hero}
                alt='Two men and a woman connected in a triangle showing how Netbook works'
                className='img-fluid'
              />
            </div>
          </section>
        </Container>
      </section>
      <Container className='px-md-0 px-sm-4 px-md-0 box-small'>
        <section className='d-flex justify-content-md-between align-items-md-center section2 w-100 px-md-4'>
          <div className='w-md-50 left'>
            <Card className='border-0 w-sm-100'>
              <Card.Body>
                <Card.Subtitle className='mb-2 subtitle fw-medium'>
                  Whats Netbooks?
                </Card.Subtitle>
                <Card.Title className='title mt-sm-1 mb-sm-3 fw-bold'>
                  Why Join to Netbooks Social Network?
                </Card.Title>
                <Card.Text className=' fw-normal'>
                  Recents surveys have indicated that small businesses recognize
                  the need they have to connect with consumer.
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='bullet-container'>
              <ul className='p-0 mb-md-0 mb-sm-5'>
                <li className='d-flex fw-medium align-items-center mb-3 '>
                  <div className='d-flex align-items-center justify-content-center rounded-2 me-2'>
                    <p className='rounded m-sm-0'></p>
                  </div>
                  Groups
                </li>
                <li className='d-flex align-items-center fw-medium mb-3'>
                  <div className='d-flex align-items-center justify-content-center rounded-2 me-2'>
                    <p className='rounded m-sm-0'></p>
                  </div>
                  Messages
                </li>
                <li className='d-flex align-items-center fw-medium'>
                  <div className='d-flex align-items-center justify-content-center rounded-2 me-2'>
                    <p className='rounded m-sm-0'></p>
                  </div>
                  Share
                </li>
              </ul>
            </div>
          </div>

          <div className='imgContainer w-md-50 mb-md-0 mb-sm-5'>
            <div className='ms-md-5 '>
              <img
                src={meeting}
                alt='A board meeting'
                className='rounded-2 img-fluid'
                loading='lazy'
              />
            </div>
            <div className='ms-md-5 small-img'>
              <img
                src={work}
                alt='Person working on their laptop'
                className='mb-md-3 mb-sm-4 rounded-2 img-fluid'
                loading='lazy'
              />
              <img
                src={connect}
                alt='cables connected to a router box'
                className='rounded-2 img-fluid'
                loading='lazy'
              />
            </div>
          </div>
        </section>
        <section className='achievements d-flex align-items-center mb-sm-4 mb-md-0 w-100 px-md-4'>
          <div className='flexbox w-100 d-lg-flex align-items-lg-center '>
            <Card className='rating mb-5 mb-lg-0'>
              <Card.Body className='p-0'>
                <Card.Title className='d-flex align-items-center gap-2 fw-medium'>
                  <img src={star} alt='' />
                  4.8 Rating
                </Card.Title>
                <Card.Subtitle>
                  <img src={ellipse13} alt='' className='ellipse13' />
                  <img src={ellipse14} alt='' className='ellipse14' />
                  <img src={ellipse15} alt='' className='ellipse14 me-2' />
                  <span className='me-1 fw-semibold'>+863k</span>
                  <span className=' fw-medium'>Members</span>
                </Card.Subtitle>

                <Card.Text className='fw-normal'>
                  More than 2 billion we people over countries use sociobooks we
                  to stay in touch with friends.
                </Card.Text>
                <Button
                  role='link'
                  className='bg-transparent border-0 ps-0 fw-medium d-inline-flex align-items-center'
                >
                  Join Our Community{' '}
                  <img src={arrowIcon} alt='' className='ps-2' />
                </Button>
              </Card.Body>
            </Card>
            <Card className='rating me-lg-3 mb-5 mb-lg-0'>
              <Card.Body className='p-0'>
                <Card.Title className='d-flex align-items-center gap-2 fw-medium'>
                  <img src={trophy} alt='' />
                  Awwwards
                </Card.Title>
                <Card.Subtitle className='d-flex align-items-center'>
                  <img src={ellipse} alt='' className='ellipse13 mt-1' />
                  <p className='mb-0 fw-normal'>
                    Best of
                    <span className='mx-1 fw-semibold '>2021</span> on Github
                  </p>
                </Card.Subtitle>

                <Card.Text className='fw-normal' role='paragraph'>
                  More than 2 billion we people over countries use sociobooks we
                  to stay in touch with friends.
                </Card.Text>
                <Button
                  role='link'
                  className='bg-transparent border-0 ps-0 fw-medium d-inline-flex align-items-center btn-grey'
                >
                  Go to Awards
                  <img src={arrowIcon2} alt='' className='ps-2' />
                </Button>
              </Card.Body>
            </Card>
            <Card className='rating  border-0'>
              <Card.Body className='p-0 box'>
                <Card.Subtitle className=' fw-medium mb-2' role='heading'>
                  Our Achievements
                </Card.Subtitle>
                <Card.Title className='fw-bold mt-sm-1'>
                  We are Connecting You The Digital Life.
                </Card.Title>
                <Card.Text className='fw-normal'>
                  The scope the Social Media becomes crucial has help the
                  business to directly engage with their needs and wants.
                </Card.Text>
                <Button
                  role='link'
                  className=' text-white border-0 fw-medium d-inline-flex align-items-center btn-grey'
                >
                  Discover me
                  <img src={arrow} alt='' className='ps-3' />
                </Button>
              </Card.Body>
            </Card>
          </div>
        </section>
        <section className='theTeam d-flex flex-column justify-content-between align-items-center px-md-4'>
          <div className='d-flex justify-content-center align-items-center box flex-column'>
            <Card className='text-center border-0'>
              <Card.Body>
                <Card.Subtitle className='mb-2 text-muted fw-medium text-capitalize'>
                  valueable teams
                </Card.Subtitle>
                <Card.Title className='fw-bold text-capitalize mb-4'>
                  our active members
                </Card.Title>
                <Card.Text className='fw-normal'>
                  when an unknown printer took a gallery of type and meeting
                  fari scrambled it
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='btn-box d-flex align-items-center justify-content-between w-100 rounded-4'>
              <Button
                className='btn1 border-0 w-25 bg-transparent rounded-4 '
                size='lg'
              >
                Newest
              </Button>
              <Button
                className='btn2 border-0 bg-transparent w-25 rounded-4'
                size='lg'
              >
                Popular
              </Button>
              <Button
                className='btn3 border-0 w-25 text-white rounded-4 me-2'
                size=''
                active
              >
                Active
              </Button>
            </div>
          </div>
          <div className='team d-md-flex justify-content-md-between align-items-md-center w-100'>
            <Card className='w-100 d-flex align-items-center border-0'>
              <div className='div1 d-flex align-items-sm-center justify-content-sm-center'>
                <div className='div2 rounded-circle d-flex align-items-center justify-content-center'>
                  <div className='div3'>
                    <Card.Img
                      variant='top'
                      src={team11}
                      className='rounded-5 rounded-top-0'
                    />
                  </div>
                </div>
              </div>
              <Card.Body className='text-center name'>
                <Card.Title className='ref'>Fahim Rahman</Card.Title>
                <Card.Text className='text fw-normal'>@rahman</Card.Text>
              </Card.Body>
            </Card>

            <Card className='w-100 d-flex align-items-center border-0'>
              <div className='div1 d-flex align-items-sm-center justify-content-sm-center'>
                <div className='div2 rounded-circle d-flex align-items-center justify-content-center'>
                  <div className='div3'>
                    <Card.Img
                      variant='top'
                      src={team1}
                      className='rounded-5 rounded-top-0'
                    />
                  </div>
                </div>
              </div>
              <Card.Body className='text-center name'>
                <Card.Title className='ref'>Kazi Rahman</Card.Title>
                <Card.Text className='text fw-normal'>@Rahman</Card.Text>
              </Card.Body>
            </Card>

            <Card className='w-100 d-flex align-items-center border-0'>
              <div className='div1 d-flex align-items-sm-center justify-content-sm-center'>
                <div className='div2 rounded-circle d-flex align-items-center justify-content-center'>
                  <div className='div3'>
                    <Card.Img
                      variant='top'
                      src={team2}
                      className='rounded-5 rounded-top-0'
                    />
                  </div>
                </div>
              </div>
              <Card.Body className='text-center name'>
                <Card.Title className='ref'>Masterero Ali</Card.Title>
                <Card.Text className='text fw-normal'>@Master</Card.Text>
              </Card.Body>
            </Card>
            <Card className='w-100 d-flex align-items-center border-0'>
              <div className='div1 d-flex align-items-sm-center justify-content-sm-center'>
                <div className='div2 rounded-circle d-flex align-items-center justify-content-center'>
                  <div className='div3'>
                    <Card.Img
                      variant='top'
                      src={team3}
                      className='rounded-5 rounded-top-0'
                    />
                  </div>
                </div>
              </div>
              <Card.Body className='text-center name'>
                <Card.Title className='ref'>Alia Karon</Card.Title>
                <Card.Text className='text fw-normal'>@Alia</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
      </Container>
    </Container>
  )
}

export default Page
