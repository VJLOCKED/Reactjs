import { FC, useEffect, useState } from 'react';

import '../../styles.css';



const Homepage: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Initial resize on component mount
    handleResize();

    // Handle resize on window resize
    window.onresize = handleResize;

    // Cleanup on unmount
    return () => {
      window.onresize = null;
    };
  }, []);

  return (
    <div className="homepage">
      <h1>Page Dimenstions</h1>
      <p>Width: {windowDimensions.width}px</p>
      <p>Height: {windowDimensions.height}px</p>
    </div>
  );
};

export default Homepage;