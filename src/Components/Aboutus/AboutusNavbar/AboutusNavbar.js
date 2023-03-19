import React from 'react'
import './AboutusNavbar.css'

const AboutusNavbar = () => {
  return (
    <div className="aboutus-navbar-container">
        <ul className="aboutus-navbar">
          <li><span className="aboutus-navbar-active">Info</span></li>
          <li><span>FAQ</span></li>
          <li><span>Complaints and Feedback</span></li>
          <li><span>Privacy Policy</span></li>
          <li><span>Terms & Conditions</span></li>
        </ul>
    </div>
  )
}

export default AboutusNavbar