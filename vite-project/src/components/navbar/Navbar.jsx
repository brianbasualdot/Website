import './Navbar.scss';
import Logo from '../../assets/logo.png';
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Navbar = () => {

  const [showNav, setShowNav] = useState('false');


  return ( <header className='navbar'>
    <div className="navbar__container wrapper">
        <a href="#" className="navbar__logo" onClick={() => setShowNav(false)}>
            <img src={Logo} alt="logo" />
        </a>

        <div className='navbar__links'>
            <ul className={'${showNav ? "show" : ""}'}>
                <li onClick={() => setShowNav(false)}>
                    <a href="#">Home</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="#">About</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="#">Services</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="#">Skills</a>
                </li>
                <li onClick={() => setShowNav(false)}>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <div className="navbar__phone">
                <HiOutlineDevicePhoneMobile />
                <span> +54 2314 515538 </span>
            </div>

            <div className="navbar__menu" onClick={() => setShowNav(!showNav)}>
                {showNav ? <IoMdClose /> : <IoMenu /> }
            </div>
        </div>
    </div>
  </header>
  ) 
  
}

export default Navbar