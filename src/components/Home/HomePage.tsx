import { FC } from 'react';
import Video from '../Video';
import Backgroundimage from '../Backgroundimage';
import '../../styles.css';
import { transform } from '@babel/core';


const HomePage: FC = () => {
  return (
    <body>
      
      <div>

      <section className='content-section'>
       
        <div className='text'>
           <p>Upcoming Launch</p>
           <h1>Astra 1p mission</h1>
           <a href="https://www.spacex.com/launches/mission/?missionId=astra1p" className='button' role='button'><b>WATCH</b></a>
        </div>
         
          <Backgroundimage src={"https://sxcontent9668.azureedge.us/cms-assets/assets/SES_24_Astra_1_P_vertical_061924_DSC_1785_desktop_eec869cf79.jpg"} />
        
        </section>

        <section className='content-section'>
        
        <div className='text'>
          
            <p>Recent Launch</p>
            <h1>STARSHIP'S FOURTH FLIGHT TEST</h1>
            <a href='https://www.spacex.com/launches/mission/?missionId=starship-flight-4' className='button' role='button'><b>Learn more</b></a>
        </div>
        
        <Video src={"https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_4_Drone_Website_1080_P_8b7a57a59a.mp4"}/>
        
        </section>

        <section className='content-section'>
        
        <div className='text'>
            <p>Recent Launch</p>
            <h1>STARlink misson</h1>
            <a href="https://www.spacex.com/launches/mission/?missionId=sl-9-1" className='button' role='button'><b>Rewatch</b></a>
        </div>
        
        <Backgroundimage src={"https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_G9_1_SW_Hill_Horiz_8342_Desktop_95d3f5e321.jpg"} />
        
        </section>

        <section className='content-section'>
        
        <div className='text'>
            <h1>ADVANCING HUMAN SPACEFLIGHT</h1>
            <a href="https://www.spacex.com/updates/#eva-suit" className='button' role='button'><b>Learn more</b></a>
        </div>
        
        <Backgroundimage src={"https://sxcontent9668.azureedge.us/cms-assets/assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg"} />
        
        </section>

        <section className='content-section'>
        
        <div className='text'>
            <h1>TO MAKE LIFE MULTIPLANETARY</h1>
            <a href="https://www.spacex.com/updates/#make-life-multiplanetary" className='button' role='button'><b>Learn more</b></a>
        
      </div>
      
        <Backgroundimage src={"https://sxcontent9668.azureedge.us/cms-assets/assets/make_life_multiplanetary_desktop_3fa7cff73c.jpg"} />
      
        </section>

      </div>
    
    </body>
  )
  
};


export default HomePage;
