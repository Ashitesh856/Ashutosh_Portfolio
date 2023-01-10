import React from 'react'
import './about.css'
import ME from '../../assets/aboutmepic.png'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {HiOutlineUsers} from 'react-icons/hi'
import {VscFileSubmodule} from 'react-icons/vsc'
const About=()=> {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={ME} alt="About"/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdOutlineWorkOutline className='about__icon'/>
              <h5>Experience</h5>
              <small>+1 year Working</small>
            </article>
            <article className='about__card'>
              < HiOutlineUsers className='about__icon'/>
              <h5>Employers</h5>
              <small>Companies I Worked For</small>
            </article>
            <article className='about__card'>
              < VscFileSubmodule className='about__icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>
            I am a student from vit vellore university, I'm a confident and persuasive individual with
             efficient public speaking skills who has been spokesperson of the batch in several years. And I have worked as the operational 
             head for AI and ML club in my campus and done projects under it . My area of interest lies in OS,Data Structures DBMS, OOPS, and Software Engineering. 
             And I did several projects in different domains.
            </p>
            <a href="#contact" className='btn btn-primary'>Lets's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About