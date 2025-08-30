import React from 'react'
import './Hero.css'
import { Typewriter } from "react-simple-typewriter";
import me from "../../assets/me.jpg"
const Hero = () => {
  return (
    <div className='hero container' >
        <div className='hero-text'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={me} alt="me" className="hero-img" />
          <br></br> 
          <br></br>
            <h1>Hello, I'm Aditi Joshi.</h1> 
            <br></br>
            <br></br>
            <h3>
          <Typewriter
            words={[
              "CODE",
              "CREATE",
              "SOLVE"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={130}
            deleteSpeed={80}
          />
        </h3>
        <br></br>
        <br></br>
        <ul>
            <li>Turning ideas into seamless web experiences.</li>
            <li>Expert in Node.js, MongoDB, and frontend technologies.</li>
            <li>Enjoys tackling complex problems on LeetCode and Codeforces</li>
        </ul>
        <br></br>
        <br></br>
        <div className='connections'>
           <a href="https://github.com/1603Aditi" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/aditi-joshi-200416aj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin"></i>
        </a> 
        <a href="https://leetcode.com/u/ADITI1989/" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-laptop-code"></i>
        </a> 
        </div>
        </div>
    </div>
  )
}

export default Hero
