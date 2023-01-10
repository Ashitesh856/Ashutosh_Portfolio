import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/proj1.png'
import IMG2 from '../../assets/proj2.png'
import IMG3 from '../../assets/proj3.png'
import IMG4 from '../../assets/proj4.png'
import IMG5 from '../../assets/proj5.png'
const data=[
  {
    id:1,
    image:IMG1,
    title:'Autonomous Functional Testing',
    github:'https://github.com/Ashutosh856',
    demo:'https://dribbble.com/Alien_pixels'
  },
  {
    id:2,
    image:IMG2,
    title:'Interactive C-Shell',
    github:'https://github.com/Ashutosh856',
    demo:'https://dribbble.com/Alien_pixels'
  },
  {
    id:3,
    image:IMG3,
    title:'Extreme Tic-Tac-Toe Bot',
    github:'https://github.com/Ashutosh856',
    demo:'https://dribbble.com/Alien_pixels'
  },
  {
    id:4,
    image:IMG4,
    title:'Word Prediction Application',
    github:'https://github.com/Ashutosh856',
    demo:'https://dribbble.com/Alien_pixels'
  },
  {
    id:5,
    image:IMG5,
    title:'Automatic Recipe Prediction System',
    github:'https://github.com/Ashutosh856',
    demo:'https://dribbble.com/Alien_pixels'
  }

]

const Portfolio=()=> {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo})=>{
            return(
          <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}/>
         </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' rel='noreferrer' target='_blank' >Github</a>
          <a href={demo} className='btn btn-primary' target='__blank' >Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio