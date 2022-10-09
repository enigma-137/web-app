import React from 'react'
import Header from '../../Components/Header'
import ContactImage from '../../images/pexels-tubarones-photography-3212104.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'
const Contact = () => {
  return (
    <>
    <Header title= 'Contact Us'image={ContactImage} >
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio hic nihil obcaecati.
  </Header>
  <section className="contact">
    <div className="container contact__container">
      <div className="contact__wrapper">
        <a href="mailto:emmanuelonoja291@gmail.com" target="_blank" rel='noreferrer noopener'>
          {<MdEmail/>}</a>
          <a href="http://m.me/enigma_me" target="_blank" rel='noreferrer noopener'>
          {<BsMessenger/>}</a>
          <a href="https://wa.me/+2349053386778" target="_blank" rel='noreferrer noopener'>
          {<IoLogoWhatsapp/>}</a>
      </div>
    </div>
  </section>
  </>
  )

  
}

export default Contact