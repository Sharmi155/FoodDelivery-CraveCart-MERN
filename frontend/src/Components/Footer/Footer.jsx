import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo'   src={assets.logo} alt=""/>
                <p>Good food is the foundation of genuine happiness.<br/> We deliver it fresh, fast, and with love.</p>       
             <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
                
                
            <div className="footer-content-center">
             <h2>COMPANY</h2>
             <ul>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>        
             </ul>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9876543210</li>
                <li>contact@cravecart.com</li>
            </ul>
            </div>
        </div> 
        <hr />
        <p className="footer-copyright">copyright 2024 © cravecart.com - All Right Reserved</p>
    </div>
   
  )
}

export default Footer