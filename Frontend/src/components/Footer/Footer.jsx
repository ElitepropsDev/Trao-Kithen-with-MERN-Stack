import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img className='footer-logo' src={assets.footer_logo} alt="" />
                <p> Welcome to Trao Kitchen, where flavor meets passion! At Trao Kitchen, we believe food is more than just nourishment – it's an experience that brings people together. Our journey began with a love for authentic, mouthwatering cuisine and a mission to share the joy of great food with our community!</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>
                </div>            
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+2348062565896</li>
                    <li>traokitchen@yahoo.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © Traokitchen.com - All right reserved.</p>
    </div>
  )
}

export default Footer