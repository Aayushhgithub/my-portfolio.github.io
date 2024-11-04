import React from 'react'

const Project = () => {
  return (
    <div>
      <div className='Project-container'>
      <div className='Project-header'>
        <h2>My Projects</h2>
        </div>
        <div className='Project-body'>
        <div className='Projects'>
        <div className='Project-banner'>
        <img src='./portfolio-1.jpg' width='300px'/>
        </div>
        <div className='Project-content'>
        <h4>Compelete Authentication project</h4>
        <p>This projects include login, registration function and store token in localstorage .And forget and change password feature using email send link , using send otp, using secret answer method .</p>
       <button>View Projects</button>
        </div>
        </div>
        <div className='Projects'>
        <div className='Project-content'>
        <h4>Compelete Authentication project</h4>
        <p>This projects include login, registration function and store token in localstorage .And forget and change password feature using email send link , using send otp, using secret answer method .</p>
       <button>View Projects</button>
        </div>
        <div className='Project-banner'>
        <img src='./portfolio-2.jpg' width='300px'/>
        </div>
        </div>
        <div className='Projects'>
        <div className='Project-banner'>
        <img src='./portfolio-3.jpg' width='300px'/>
        </div>
        <div className='Project-content'>
        <h4>Compelete Authentication project</h4>
        <p>This projects include login, registration function and store token in localstorage .And forget and change password feature using email send link , using send otp, using secret answer method .</p>
       <button>View Projects</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Project
