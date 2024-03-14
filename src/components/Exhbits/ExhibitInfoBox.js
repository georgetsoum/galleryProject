import {data} from '../../data/data';
import ExhibitNavigationButton from './ExhibitNavigationButton';
import { useContext, useState } from 'react';
import {routes} from '../../config/routes';

function ExhibitInfoBox(props){
    const [zoomLevel, setZoomLevel] = useState(1);
    const handleMouseOver = () => {
        setZoomLevel(1.070); 
      };
      const handleMouseOut = () => {
        setZoomLevel(1);
      };
      
      const exhibitionIdList = data.exhibitions.map(({ id }) => ({ id }));
    return( 
        <div style={{
                display:'flex',
                flexDirection :'column',
                backgroundColor: 'rgba(1, 1, 0, 0.4)',
                // backgroundPositionY: '50%',
                // backgroundSize: "cover",
                 alignItems: 'center',
                // width: '100%',
                // justifyContent: 'end',
                // marginTop: '200px',
                 border: '3px solid black',
                 //height: '300px',
                 transition: 'transform 0.3s ease',
                 transform: `scale(${zoomLevel})`,
                width: '250',
                height: 'contentheight'
                  }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  >
            <img src={'/'+props.image} alt={props.title} width={450} height={400} />
            <h5 style={{margin:"10px"}}>{props.title}</h5>
            <ExhibitNavigationButton route={props.route} id={props.id}/>
          </div>
    );
}

export default ExhibitInfoBox;