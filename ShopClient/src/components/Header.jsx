import React , { useState, useEffect } from 'react'
import Announcement from './Announcement'
import Navbar from './Navbar'
import Menu from './Menu'
import './Header.css'

const Header = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setSticky(window.scrollY > 200);
        console.log(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <nav className={`${sticky ? "sticky" : ""}`}>
            <div className='hea'>
            <Announcement/>
            <Navbar/>
            <Menu/>
            </div>
        </nav>
    )
}

export default Header
