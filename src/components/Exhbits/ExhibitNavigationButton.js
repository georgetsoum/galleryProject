import {colors} from '../../styles/colors';
import {useLocation} from 'wouter';
import Button from '@mui/material/Button';


function SelectExhibitButton({ route, exhibitId, exhibitionId }) {
  const [location, setLocation] = useLocation();
  
 
  
  function navigateToRoute() {
    setLocation(route + `/${exhibitionId}` + `/${exhibitId}`);
  }
  

  return (
    <Button
      onClick={navigateToRoute}
      variant='contained'
      sx={{
        height: 'contentheight',
        width: 'contentheight',
        backgroundColor: 'black',
        color: colors.white,
        fontSize: '20px',
        '&:hover': {
          backgroundColor: colors.jet,
        },
      }}
    >
      MORE INFO   
    </Button>
    
  );
}

export default SelectExhibitButton;