import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'

export const Footer = () => {
  return (
  <Container maxWidth='lg,sm,md,xs' fixed>
  <footer className="footer-section">
  <div className="container1">
      <div className="footer-cta pt-5 pb-5 respon">
          <div className="row flex1">
              <div className="col-xl-4 col-md-4 mb-30 " >
                  <div className="single-cta">
                      <i className="fas fa-map-marker-alt"></i>
                      <div className="cta-text">
                          <h4>Find us</h4>
                          <span>INDORE (M.P.)</span>
                      </div>
                  </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                      <i className="fas fa-phone"></i>
                      <div className="cta-text">
                          <h4>Call us</h4>
                          <span>9993613221</span>
                      </div>
                  </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                  <div className="single-cta">
                      <i className="far fa-envelope-open"></i>
                      <div className="cta-text">
                          <h4>Mail us</h4>
                          <span>deepakrathor3221@gmail.com</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="footer-content pt-5 pb-5">
          <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                     
                   
                      <div className="footer-social-icon footer-cta">
                          <span>Follow us</span>
                          <a href="https://www.linkedin.com/in/deepak-rathor18/"><i class="fa-brands fa-linkedin"></i></a>
                          <a href="https://www.instagram.com/mr_deepak__rathor/"><i class="fa-brands fa-instagram"></i></a>
                          <a href="https://www.facebook.com/people/Deepak-Rathor/pfbid0GPMeTqfk82BECogAJqUQ5MvLvx22SnNJEgR7xeqfAT9B8d4kFgaunmNz7KJgysDFl/?mibextid=ZbWKwL"><i className="fab fa-facebook-f facebook-bg"></i></a>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>
  <div className="copyright-area">
      <div className="container">
          <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div className="copyright-text">
                      <p> Copy &copy; 2023  Criclive&trade; . All rights reserved . <a href="https://deepak-rathor18.github.io/portfolio/">Deepak Rathor</a></p>
                  </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div className="footer-menu">
                      <ul>
                      <li><Link to="">Home</Link></li>
                      <li><Link to="#">Terms</Link></li>
                      <li><Link to="#">Privacy</Link></li>
                      <li><Link to="#">Policy</Link></li>
                      <li><a href='mailto:deepakrathor3221@gmail.com'>Contact</a></li>
                
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</footer>
  </Container>
  )
}
