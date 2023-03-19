import React from 'react'
import logo from '../../../images/logo.png'
import verified from '../../../images/verified.svg'
import './AboutusHeading.css'

const Heading = () => {
  return (
    <div className="heading-container">
        <img className="aboutus-logo" alt="logo" src={logo}/>
        <div className="company-name">
            <h2>A.T.Inks</h2>
            <h5>Digital Inks</h5>
        </div>
        <img className="verified-logo" alt="verify" src={verified}/>
        <span className="verified-text">Verify Company</span>
    </div>
  )
}

export default Heading