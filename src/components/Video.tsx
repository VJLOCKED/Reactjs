import React from 'react'
import '../styles.css'

export default function Video({src} ){
  return (
    <div className='video-container'>
      <div className='text'>
          <p>Recent Launch</p>
          <h1>STARSHIP'S FOURTH FLIGHT TEST</h1>    
      </div>
      <video src= {src}
    autoPlay loop muted ></video>
<a href="https://www.spacex.com/launches/mission/?missionId=starship-flight-4" aria-label="LEARN MORE Starship's Fourth Flight Test" role="button" style={{
  opacity: 1,
  visibility: 'inherit',
  transform: 'translate3d(0px, 0px, 0px)',
   // For browsers that don't support 3D transforms
}}>
      <div className="hover"></div>
      <span className="text">LEARN MORE</span>
    </a>    
    </div>
        
  )
}
