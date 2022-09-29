import Logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../Data';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react';
import './Navbar.css';

//Use state that controls the visbility of nav toggle btns
const Navbar = () => {
  const [isNav, setIsNav] = useState(false);

  return (
    <nav >
      <div className='container nav_container'>
        {/* When logo is clicked, it'd take us to home || NavLink, Link from react dom, Links from data.js */}
        <Link to="/" onClick={() => setIsNav(false)} className='logo'>
          <img src={Logo} alt='' />
        </Link>
        <ul className={`nav_links ${isNav ? 'show__nav' : 'hide__nav'}`}>
          {/* if usestate is false then show or hide nav */}
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                {/* hiding/showing navbar when a page is clicked */}
                <NavLink to={path} onClick={() => setIsNav(prev => !prev)}
                 className={({ isActive }) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                {/* If it's active, call class */}
              </li>
            )
          })}
        </ul>


        <button onClick={() => setIsNav(prev => !prev)} className="nav__toggle-btn">

          {
            //isNav is initially false, so if its false, then show X else the BAR
            isNav ? <MdOutlineClose /> : <GoThreeBars />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar