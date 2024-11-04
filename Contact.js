import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaLocationPinLock } from "react-icons/fa6";


const Contact = () => {
  return (
    <div>
      <div className='Contact-container'>
      <div className='Contact-header'>
        <h2>Get in touch</h2>
        <p>Our friendly team would love to hear from you.</p>
        <div className='Contact-icon-container'>
       <FaGithub className='Contact-icon'/>
       <FaLinkedin className='Contact-icon'/>
       <FaInstagram className='Contact-icon'/>
        </div>
        </div>
        <div className='Contact-body'>
        <div className='Contact-left'>
        <div>
         <MdContactPhone className='Contact-left-icons'/>
        <div className='Contact-content'>
            <p>phone</p>
        <p>9454008750</p>
        </div>
        </div>
        <div>
        < MdMessage className='Contact-left-icons'/>
        <div className='Contact-content'>
            <p>email</p>
        <p>9454008750</p>
        </div>
        </div>
        <div>
        <FaLocationPinLock className='Contact-left-icons'/>
        <div className='Contact-content'>
            <p>Address</p>
        <p>9454008750</p>
        </div>
        </div>
        </div>
        <div className='Contact-right'>
        <div className='form-data'>
            <label for='name'>Name</label>
            <input type='text' placeholder='Enter name' name='name'/>
        </div>
        <div className='form-data'>
            <label for='name'>Email</label>
            <input type='text' placeholder='Enter email' name='name'/>
        </div>
        <div className='form-data'>
            <label for='name'>mob</label>
            <input type='text' placeholder='Enter Mob' name='name'/>
        </div>
        <div className='form-data'>
            <label for='name'>Message</label>
            <input type='text' placeholder='send message' name='name'/>
        </div>
        <button>Submit</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
