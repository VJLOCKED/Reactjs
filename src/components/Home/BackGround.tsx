import React from 'react';
import Video from '../Video';
import Vid from './Vid';

export default function BackGround({ isVideo, isImage, src, para, heading, link, buttontext }) {
  return (
    <div className='content-section'>
      <div className='text'>
           <p>{para}</p>
           <h1>{heading}</h1>
           <a href={link} className='button' role='button'><b>{buttontext}</b></a>
       </div>

    { isVideo ? <Video src={src} autoPlay loop muted /> :  isImage ? <img className='background' src={src} /> : null  }
    
    </div>
  );
}