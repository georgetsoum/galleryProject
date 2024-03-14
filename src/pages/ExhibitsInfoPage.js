import { colors } from '../styles/colors.js';
import { useParams } from 'wouter';
import { useContext } from 'react';
import ExhibitBox from '../components/Exhbits/ExhibitBox.js'
import {data} from '../data/data.js'
import back1 from '../imgs/back1.jpeg';


function ExhibitsInfoPage() {
  const { exhibitionid, exhibitid} = useParams(); // Access route parameter 'id'
  console.log(exhibitionid, exhibitid);
  const exhibition = data.exhibitions.find((exhibition) => exhibition.id === parseInt(exhibitionid))
  console.log('exhibition', exhibition)
  //console.log(props.mach.params)
  //const exhibitionIdList = data.exhibitions.map(({ id }) => ({ id }));
  //console.log(exhibitionIdList)
  //const [match, params] = useParams();
  //console.log(params)
  //  exhibition.exhibits.map((exhibit) => (
  //      console.log(exhibit)))
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
        List of exhibits
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
        <ExhibitBox id={exhibit.id}  image ={exhibit.image} title ={exhibit.title} />
            
          ))}
    </div>
    </div>
  );
}
export default ExhibitsInfoPage;