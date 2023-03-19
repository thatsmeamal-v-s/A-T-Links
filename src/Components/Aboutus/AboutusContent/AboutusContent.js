import React from 'react'
import edit from '../../../images/edit.png'
import './AboutusContent.css'

const AboutusContent = () => {
    const aboutUs = "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
    
    return (
        <div className="aboutus-content-container">
            <p className="aboutus-content">{aboutUs}</p>
            <img className="edit-icon" alt="edit" src={edit}/>
        </div>
    )
}

export default AboutusContent