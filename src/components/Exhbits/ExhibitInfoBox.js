import {data} from '../../data/data';
import ExhibitNavigationButton from './ExhibitNavigationButton';
import { useContext, useState } from 'react';
import {routes} from '../../config/routes';

function ExhibitInfoBox(props){
    const [click, setclick] = useState(false);
    const handleClick = () => {
        setclick(!click); 
        console.log(click);
       click=true;
      };
      console.log(props)
      const exhibitionIdList = data.exhibitions.map(({ id }) => ({ id }));
    return( 
      <div style={{display:'flex',
      flexDirection :'row',
      fontSize: '35px',
      Width: '250px',
      height: 'contentheight',
      backgroundColor: 'rgba(1, 1, 0, 0.6)',
      }}>
       
        <div style={{
                display:'flex',
                flexDirection :'column',
                backgroundColor: 'rgba(1, 1, 0, 0.4)',
                 alignItems: 'center',
                // width: '100%',
                // justifyContent: 'end',
                // marginTop: '200px',
                 border: '3px solid black',
                 //height: '300px',
                width: '250',
                height: 'contentheight'
                  }}
                  onClick={handleClick}

                  >
            <img src={'/'+props.image} alt={props.title} width={450} height={400} />
            <h5 style={{margin:"10px"}}>{props.title}</h5>
          </div>
          <p style={{margin:"10px",
          display: 'flex',
        textAlign:'center',
        //width: '1000px',
        alignContent:'center'}}>{props.description}</p>
          </div>
    );
}

export default ExhibitInfoBox;