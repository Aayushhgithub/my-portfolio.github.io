import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='Footer-container'>
      <div className='Footer-child'>
        <h3>Contact</h3>
        <h4>Feel Free To reach out!</h4>
        <div className='Footer-icon-container'>
       <FaGithub className='Footer-icon'/>
       <FaLinkedin className='Footer-icon'/>
       <FaInstagram className='Footer-icon'/>
        </div>
        </div>
        <div className='Footer-child'>
        <h4>Important Links</h4>
        <p>Home</p>
        <p>About us</p>
        <p>Project </p>  
        </div>
        <div className='Footer-child'>
        <h4>Connect With us</h4>
        <p>LinkedIn</p>
        <p>Github</p>
        <p>Instagram </p>  
        </div>
        <div className='Footer-child'>
        <h4>Contact Info</h4>
        <p>+9454008750</p>
        <p>ayushtiwari18002@gmail.com</p>
        <p>Varanasi, India </p>  
        </div>
      </div>
    </div>
  )
}

export default Footer
