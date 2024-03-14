import {data} from '../../data/data';
import ExhibitionNavigationButton from './ExhibitionNavigationButton';
import { useState } from 'react';
import {routes} from '../../config/routes';

function ExhbitionBox(props){
    const [zoomLevel, setZoomLevel] = useState(1);
    //console.log(props)
    const handleMouseOver = () => {
        setZoomLevel(1.070);
      };
      const handleMouseOut = () => {
        setZoomLevel(1);
      };
      const exhibitionIdList = data.exhibitions.map(({ id }) => ({ id }));
    return(
      <div>
        <h1>{props.description}</h1>
        <div style={{
                display:'flex',
                flexDirection :'row',
                backgroundImage: `url(${props.image})`,
                backgroundPositionY: '50%',
                backgroundSize: "cover",
                alignItems: 'end',
                width: '400px',
                justifyContent: 'end',
                //marginTop: '200px',
                border: '3px solid black',
                height: '400px',
                paddingRight: '20px',
                transition: 'transform 0.3s ease',
                borderRadius: '10px 100px / 120px',
                transform: `scale(${zoomLevel})`
                  }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}>
                    
            <p style={{
        //border: '1px solid yellow'
      }}>
        {/* Check <code>data.js</code> -
        it has {data.exhibitions.length} exhibitions */}
      </p>
      <ExhibitionNavigationButton route={props.route} id={props.id} />
    </div>
    </div>
    );
}


export default ExhbitionBox;