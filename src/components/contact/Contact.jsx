import React from 'react'
import './contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
import {AiOutlineMail,AiOutlineInstagram,AiOutlineWhatsApp} from 'react-icons/ai'
const Contact=()=> {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tgepatg', 'template_q919zbn', form.current, '2V-EunU1Fg7WuN_Gc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ashutoshpocham@gmail.com</h5>
            <a href='mailto:ashutoshpocham@gmail.com' rel="noreferrer"   target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineInstagram className='contact__option-icon' />
            <h4>Instagram</h4> {/*for messwnger*/}
            <h5>ashutosh_pochamreddy</h5>{/* href='https://m.me/username'*/}
            <a href='https://www.instagram.com/ashutosh_pochamreddy' rel="noreferrer"   target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            < AiOutlineWhatsApp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 6303679811</h5>
            <a href='https://wa.me/+916303679811' rel="noreferrer"  target='_blank'>Send a Message</a>
          </article>
        </div>
        {/*=======END OF CONTACT OPTIONS=====*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='text' name='email' placeholder='Your Email' required/>
          <textarea  name='message' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact