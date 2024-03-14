
/*
Component example: A simple button that navigates to the given page (route)
*/
import {colors} from '../../styles/colors';
import {useLocation} from 'wouter';
import {useState} from 'react'
import Button from '@mui/material/Button';

function ExhibitionNavigationButton({ route, id }) {
  const [location, setLocation] = useLocation();
  //console.log(route);
  function navigateToRoute() {
    setLocation(route + `/${id}`);
    //console.log(route+ `/${id}`);
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
    <Button
      onClick={navigateToRoute}
      // style={{
      //   height: 60,
      //   width: 'auto',
      //   backgroundColor: '#000',
      //   color: colors.white,
      //   fontSize: 20,
      //   border: 'none',
        // transition: 'transform 0.3s ease',
       //  transform: `scale(${zoomLevel})`,
      //   borderRadius: '30px'
      // }}
      variant='contained'
      sx={{
        height: 'contentheight',
        width: 'contentheight',
        backgroundColor: 'black',
        color: colors.white,
        borderRadius: '5px',
        fontSize: 'calc(15px)',
        '&:hover': {
        backgroundColor: colors.jet,
        //transition: 'transform 0.9s ease',
        //transform: `scale(${zoomLevel})`,
        },
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      Navigate to the Exhibition {id}
    </Button>
  );
}

export default ExhibitionNavigationButton;