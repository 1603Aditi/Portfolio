import React from 'react'
import "./Resume.css"
const Resume = () => {
  return (
    <div class="resume">
        <button className='btn-dark'>
          <a href="/Resume(overleaf).pdf" download>
            Download Resume
          </a>
        </button>
    </div>
  )
}

export default Resume
