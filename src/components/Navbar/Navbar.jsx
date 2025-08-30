import React ,{useState,useEffect} from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"

const navbar = () => {

  const[sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 40 ? setSticky(true):setSticky(false);
    })
  },[]);
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu ? setMobileMenu(false):setMobileMenu(true);
  }
  return (

    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} className="logo"/>
     <ul className={mobileMenu?'':'hide-mobile-menu' }>
      
        <li><a href="#home"> About</a></li>
        <li><a href="#skills"> Skills</a></li>
        <li><a href="#projects"> Projects</a></li>
        <li><a href="#connect"> Connect</a></li>
        <li><button className='btn'><a href="/Resume(overleaf).pdf" download>Resume</a></button></li>
     </ul>
     <div  className="menu" onClick={toggleMenu}><i class="fa-solid fa-bars"></i></div>
    </nav>

  )
}


export default navbar
