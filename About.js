import React from 'react';
import { GrUserManager } from "react-icons/gr";

const About = () => {
  return (
    <div >
       <div className='About-container'>
        
       <div className='About-left'>
        <p>Hi, I'm Ayush Tiwari <GrUserManager/></p>
        <h4>A FullStack Web Developer </h4>
        <p>I am from varanasi,India. A place of beauty and nature.Since my childhood, i love arts and design.I always try to design stuff with my unique point of view.I also love to create things
        that can be useful to others.
        </p>
        <p>I started coding since  I was in 12th.Coding is also an art for me.i love it and now ,I have the opportunity to design along with the coding.I find it really interesting and in enjoyed the process alot.</p>
        <p>My vision is to make the world a better place.Now almost everything is becoming better than ever . It is time for us to create more good stuff that helps the world to be become a better place.</p>
        <button>Download CV</button>
        </div> 

        <div className='About-right'>
        <img src='./background.png' height='320px'/>
     
        </div> 
       </div> 
    </div>
  )
}

export default About
