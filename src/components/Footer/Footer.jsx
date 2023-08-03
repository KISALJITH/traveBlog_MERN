import React from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'
import logo from '../../assets/all-images/logo.jpg'


const quickLinks = [

  {
    path:'/blogs',
    display:'Our Blogs'
  },

  {
    path:'/about',
    display:'About Us'
  },
  
  {
    path:'/contact',
    display:'Contact Us'
  }
]

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col className="logo_column" lg='4' md='4' sm='12'>
          {/* <div className="logo footer__logo">
            <h1><Link to='/home' className='d-flex align-items-center gap-3'>
            <i class="ri-car-line"></i>
            <span>Rent Car <br /> Service </span>
            </Link></h1>
          </div> */}
            <img src={logo} alt="" />
        
          <p className="footer__logo-content">
          Our site is a treasure trove of engaging articles that provide valuable insights, guiding and enriching the experiences of all explorers.  
          </p>
        </Col>

        <Col lg='2' md='4' sm='6'>
          <div className="mb-4">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup>
              {
                quickLinks.map((item,index) => (
                  <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <div className="mb-4">
            <h5 className="footer__link-title mb-4">Location</h5>
            <p className="office__info">2/365, Colombo 07, Sri Lanka</p>
            <p className="office__info">Phone : +94 11 485 2069</p>
            <p className="office__info">Email : Trave@gmail.com</p>
          </div>
        </Col>

        <Col lg='3' md='4' sm='12'>
          <div className="mb-4">
            <h5 className="footer__link-title">Newsletter</h5>
            <p className='section__description'>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='Email'/>
              <span><i class="ri-send-plane-line"></i></span>
            </div>
          </div>
        </Col>

        <Col lg='12'>
          <div className="footer__bottom">
            <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
              <i class="ri-copyright-line"></i>Copyright {year}, 
              Developed by SkSolutionsLanka. All rights reserved.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer