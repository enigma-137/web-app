import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import {FaFacebookF, FaLinkedin } from "react-icons/fa"

import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import {BsMedium} from "react-icons/bs"


const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to={'/'} className='logo'>
            <img src={Logo} alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Provident error, quasi accusantium voluptatibus assumenda
            a deleniti quis quisquam expedita sint.
          </p>
          <div className="footer__socials">
            <a href="https://linkedln.com" target='_blank' rel=" noreferrer noopener">
              <FaLinkedin /></a> 
            <a href="https://facebook.com" target='_blank' rel=" noreferrer noopener">
              <FaFacebookF /></a>
            <a href="https://twitter.com" target='_blank' rel=" noreferrer noopener">
              <AiOutlineTwitter /></a>
            <a href="https://instagram.com" target='_blank' rel=" noreferrer noopener">
              <AiFillInstagram /></a>
              <a href="https://medium.com/@enigma78" target='_blank' rel=" noreferrer noopener">
              < BsMedium /></a>
            
          </div>
          </article>
        <article><h4>Permalinks</h4>
        <Link to= '/about'>About Us</Link>
        <Link to= '/contact'>Contact Us</Link>
        <Link to= '/gallery'>Gallery</Link>
        <Link to= '/plans'>Plans</Link>
        <Link to= '/trainer'>Team</Link>
        </article>
        <article><h4>Permalinks</h4>
        <Link to= '/about'>Blogs</Link>
        <Link to= '/contact'>Reading Plan</Link>
        <Link to= '/gallery'>Outreach</Link>
      
        </article>
        <article><h4>Get in touch</h4>
        <Link to= '/about'>Support</Link>
        <Link to= '/contact'>Hotline</Link>
        
        </article>

      
      </div>
      <div className="footer__copyright">
        <small>2022 Kingdom Giants &copy; All right reserved</small>

      </div>
    </footer>
  )
}

export default Footer