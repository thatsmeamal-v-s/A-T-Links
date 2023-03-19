import React from 'react'
import './Help.css'
import help from '../../images/help.png'

const Help = () => {
  return (
    <div className="help-container">
        <img alt="help" src={help}/>
        <p className="help-heading">Need Help ?</p>
        <p>Our support team is at your disposal</p>
        <button type="button" className="btn btn-dark">
            <span>Get Help</span>
        </button>
    </div>
  )
}

export default Help