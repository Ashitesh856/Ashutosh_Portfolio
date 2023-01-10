import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/facepic.png'
import Headersocials from './Headersocials'
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ashutosh</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <Headersocials/>

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header