
/*
Component example: A simple button that navigates to the given page (route)
*/
import {colors} from '../styles/colors';
import {useLocation} from 'wouter';
import { useState } from 'react';

function BackNavigationButton({ route }) {
  const [location, setLocation] = useLocation();

function navigateToRoute() {
    setLocation(route);
  }
  const [zoomLevel, setZoomLevel] = useState(1);
    const handleMouseOver = () => {
        // Update the zoom level when mouse is over
        setZoomLevel(1.070); // You can adjust this value for the desired zoom effect
      };
      // Event handler for mouseout (to reset the zoom)
      const handleMouseOut = () => {
        // Reset the zoom level when mouse is out
        setZoomLevel(1);
      };
  return (
    <button
      onClick={navigateToRoute}
      style={{
        height: 60,
        width: 'auto',
        backgroundColor: '#000',
        color: colors.white,
        fontSize: 20,
        border: 'none',
        transition: 'transform 0.3s ease',
        transform: `scale(${zoomLevel})`
      }}
      onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
    >
      Navigate to the IntroPage
    </button>
  );
}

export default BackNavigationButton;