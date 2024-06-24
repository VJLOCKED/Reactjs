import React from 'react'

export default function Vid({para, heading, src, link, buttontext}) {
  return (
    <div className='content-section'>
      <div className='text'>
           <p>{para}</p>
           <h1>{heading}</h1>
       </div>
       <video src= {src}
       autoPlay loop muted ></video>
       <a href={link} className='button' role='button'> 
      <span className="text hover"><b>{buttontext}</b></span></a>
    </div>
    
  )
}
