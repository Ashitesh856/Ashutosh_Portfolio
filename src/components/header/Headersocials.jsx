import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare,FaDribbbleSquare} from 'react-icons/fa'
const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href='https//linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='https//github.com' target='_blank'><FaGithubSquare/></a>
        <a href='https//dribble.com' target='_blank'><FaDribbbleSquare/></a>
     </div>
  )
}

export default Headersocials