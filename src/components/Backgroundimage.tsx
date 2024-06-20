import React from 'react'

export default function Backgroundimage({src}) {
  return (
    <div>
      <img className="background" src={src} alt="Unable to load background img" />  
    </div>
  )
}
