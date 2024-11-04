import React from 'react'
import { GrLinkedin } from "react-icons/gr";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='Navbar-container'>
        <div className='Navbar-left'>
            <h3>Ayushh!!</h3>
           <GrLinkedin  className='Nav-icons'/> 
            </div>
            <div className='Navbar-right'>
            <ul>
                <li>Home</li>
                 <li>Project</li>
                 <li>About me</li>
                 <li>Blogs</li>
                 <li>Contact</li>
            </ul>
            </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
