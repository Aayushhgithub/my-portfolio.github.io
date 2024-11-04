import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import '../App.css';

const Header = () => {

    return (
        <div className='header-container'>
           <div className='header-left'>
           <h2 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal', color:'white'}}>
           Hello I'm   {' '}
            <span style={{ color: ' #28b463', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Ayush Tiwari','Frontend developer', 'Backend developer', 'Reactjs ', 'MERN Developer']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
         <h3>From India</h3>
         <button>Download Csv</button>
         <button>Hire me</button>
         </div>
         <div className='header-right'>
         <img src='./Ayush.jpg' height='250px'/>
         </div>
        </div>
      )
}

export default Header
