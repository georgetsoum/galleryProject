import { colors } from '../styles/colors.js';
import { useParams } from 'wouter';
import { useContext } from 'react';
import { routes} from '../config/routes.js';
import ExhibitBox from '../components/Exhbits/ExhibitBox.js'
import {data} from '../data/data.js'
import back1 from '../imgs/back1.jpeg';
import ExhibitInfoBox from '../components/Exhbits/ExhibitInfoBox.js';
import BackExhibitionNavigationButton from '../components/BackExhibitionNavigationButton.js';


function ExhibitsInfoPage() {
  const { exhibitionid, exhibitid} = useParams(); // Access route parameter 'id'
  console.log(exhibitionid, exhibitid);
  const exhibition = data.exhibitions.find((exhibition) => exhibition.id === parseInt(exhibitionid))
  console.log('exhibition', exhibition)
  return (
    <div style={{
    backgroundImage: `url(${back1})`,
    backgroundPositionY: '50%',
    backgroundSize: "cover",}}>
      <h1 style ={{width : '100%',
      display: 'flex',
      textAlign: 'center',
      margin: 'auto',
      alignContent: 'center',
      justifyContent: 'center',
       color: colors.white,
      }}>
        Exhibit Info
      </h1>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        minHeight: '100vh',
        fontSize: 'calc(10px + 2vmin)',
        color: colors.white,
        flexWrap: 'wrap',
        padding: '20px',
        margin: 'auto',
        
      }}
    >
      {exhibition.exhibits.map((exhibit) => (
        //console.log(exhibit.image),
        console.log(exhibit.id, parseInt(exhibitid)),
        (exhibit.id === parseInt(exhibitid)) && (
        <ExhibitInfoBox id={exhibit.id}  image ={exhibit.image} title ={exhibit.title} description={exhibit.description} />
      )
          ))}
          <BackExhibitionNavigationButton route={routes.exhibitions}/>
    </div>
    </div>
  );
}
export default ExhibitsInfoPage;