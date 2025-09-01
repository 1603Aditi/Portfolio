import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 40 ? setSticky(true) : setSticky(false);
    });
  }, []);

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className="logo" alt="logo" />

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><a href="#home"> About</a></li>
        <li><a href="#skills"> Skills</a></li>
        <li><a href="#projects"> Projects</a></li>
        <li><a href="#connect"> Connect</a></li>

        <li id="theme" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
        </li>

        <li>
          <button className='btn'>
            <a href="/Resume(overleaf).pdf" download>Resume</a>
          </button>
        </li>
      </ul>

      <div className="menu" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
