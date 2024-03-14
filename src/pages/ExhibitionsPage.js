//import NavigationButton from '../components/NavigationButton';
import BackNavigationButton from '../components/BackNavigationButton';
import {colors} from '../styles/colors';
import {routes} from '../config/routes';
import {data} from '../data/data';
import ExhbitionBox from '../components/Exhbitions/ExhibitionBox';
import image from '../imgs/van.jpg';
import image2 from '../imgs/star.jpg';
import back1 from '../imgs/back1.jpeg';
//import ExhibitNavigationButton from '../components/Exhbits/ExhibitNavigationButton';



function ExhibitionsPage() {
  /* TODO add ExhibitionsPage */
  //console.log(routes.exhibition1)
  return (
    <div
      style={{
        //display: 'flex',
        //flexDirection: 'column',
        //alignItems: 'center',
        backgroundImage: `url(${back1})`,
        backgroundPositionY: '50%',
        backgroundSize: "cover",
        justifyContent: 'center',
        width:" 100%",
        height: '100vh',
        fontSize: 'calc(10px + 2vmin)',
        backgroundColor: colors.jet,
        color: colors.white,
        //border: '1px solid yellow'
       
      }}
    >
      <h3 style={{ 
        //border: '1px solid yellow',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        //boxShadow : '0px 0px 10px rgba(0,0,0,0.3)',
        backgroundColor: 'rgba(1, 1, 0, 0.4)',
        alignItems: 'center',
        justifyContent:'center',
        width:'max-content',
        margin:'auto',
        fontSize:"36px"
      }}>
        This is the ExhibitionsPage, it consists of {data.exhibitions.length} Exhbitions
      </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '100px',
          justifyContent:'space-around',
          flexWrap: 'wrap',
          //border: '1px solid yellow',
          height:'80vh',
          
        }}>
      
          {data.exhibitions.map((exhibition) => (
            <div key={exhibition.id}>
            <h2>{exhibition.title} </h2>
            <ExhbitionBox id={exhibition.id} route = {'exhibition'} image={exhibition.image} title={exhibition.title}  />
            </div>
          ))}
        

        {/* <ExhbitionBox id={1} route = {'exhibition1'}
         image = {image}   />
        <ExhbitionBox id ={2}  route = {'exhibition2'}
        image= {image2} /> */}

      </div>
      <footer style={{
      position:'absolute',
      backgroundColor: 'rgba(1, 1, 0, 0.4)',
      borderRadius: '10px',
      left: '40%',
      padding:'5px',
      textAlign:'center',
      alignContent:'center',
      width:'max-content',
      height:'max-content'
      //border:'1px solid red',
      
      }}>
       <h3 style={{ 
        margin:'10px'
        //color: 'black',
         }}> Head back to Intro Page</h3>
      <BackNavigationButton route={routes.intro}/>
     </footer>
    </div>
  );
}

export default ExhibitionsPage;





