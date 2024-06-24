import { FC } from 'react';
import Video from '../Video';
import Backgroundimage from '../Backgroundimage';
import '../../styles.css';
import { transform } from '@babel/core';
import BackGround from './BackGround';
import Vid from './Vid';
import Header from '../Header';

const HomePage: FC = () => {
  return (
    <body>
      <div>
      <Header />
      </div>

      <div>
         
        <BackGround isVideo={undefined} isImage={true} 
        src={"https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_G9_2_Theater_Horiz_8410_Desktop_dfed4f1932.jpg"}
         para={"Upcoming Launch"} heading={"Astra 1p mission"} 
         link={"https://www.spacex.com/launches/mission/?missionId=astra1p"} 
         buttontext={"wATCH"}  />  

         <BackGround isVideo={true}
        isImage={undefined}
        src={"https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_4_Drone_Website_1080_P_8b7a57a59a.mp4"} para={undefined} heading={undefined} link={undefined} buttontext={undefined} />
         
         </div>

      <div>
        {/* <header className='header-inner'>
          <div><a href='https://www.spacex.com/' id='logo'>SpaceX</a></div>
          <div><a></a>FALCON 9</div>
          <div>FALCON HEAVY</div>
          <div>DRAGON</div>
          <div>STARSHIP</div>
          
          
        </header>  */}

     <section className='content-section'>
       
        <div className='text'>
           <p>Upcoming Launch</p>
           <h1>Astra 1p mission</h1>
           <a href="https://www.spacex.com/launches/mission/?missionId=astra1p" className='button' role='button'><b>WATCH</b></a>
        </div>
         
          <Backgroundimage src={"https://sxcontent9668.azureedge.us/cms-assets/assets/SES_24_Astra_1_P_pad39a_DSC_8165_desktop_8755a96a57.jpg"} />
        
        </section>


        <section className='content-section'>
        
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
