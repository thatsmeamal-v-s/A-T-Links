import React from 'react'
import './SocialMediaCard.css'
import links from '../../../../images/links.png'
import edit from '../../../../images/edit.png'
import internet from '../../../../images/internet.png'
import instagram from '../../../../images/instagram.png'
import facebook from '../../../../images/facebook.png'
import twitter from '../../../../images/twitter.png'


const SocialMediaCard = () => {
  return (
    <div className="column">
        <div className="card">
            <div className="card-heading">
                <img className="card-header-icon" alt="contact" src={links}/>
                <span>Social Media & Links</span>
                <img className="edit-icon" alt="edit" src={edit}/>
            </div>
            <div className="container">
                <div className="row social-media-items">
                    <div className="col-md-3">
                        <img className="social-media-icon" alt="contact" src={internet}/>
                        <span>Website</span>
                    </div>
                    <div className="col-md-3">
                        <img className="social-media-icon" alt="contact" src={instagram}/>
                        <span>Instagram</span>
                    </div>
                    <div className="col-md-3">
                        <img className="social-media-icon" alt="contact" src={facebook}/>
                        <span>Facebook</span>
                    </div>
                    <div className="col-md-3">
                        <img className="social-media-icon" alt="contact" src={twitter}/>
                        <span>Twitter</span>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default SocialMediaCard