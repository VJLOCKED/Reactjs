import React from 'react'

export default function Video({src} ){
  return (
    <div>
      <video src= {src}
    autoPlay loop muted ></video>
    </div>
        
  )
}
