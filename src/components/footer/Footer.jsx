import React from 'react'
import './footer.css'
import {BsTwitter,BsFacebook,BsInstagram} from 'react-icons/bs'
const Footer=()=> {
  return (
    <footer>
      <a href='#' className='footer__logo'>ASHUTOSH</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contacts</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><BsFacebook/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
        <a href='https://twitter.com'><BsTwitter/></a>

      </div>
      <div className='footer__copyright'>
        <small>&copy; Ashutosh.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer