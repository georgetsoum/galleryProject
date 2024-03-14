import NavigationButton from '../components/NavigationButton';
import {colors} from '../styles/colors';
import {routes} from '../config/routes';

function IntroPage() {

  /* TODO add IntroPage */
  return (
    <div
      style={{
        backgroundImage: 'url(/ViennaMuseum.jpeg)',
        backgroundSize: "cover",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontSize: 'calc(10px + 2vmin)',
        backgroundColor: colors.jet,
        color: colors.black,
      }}
    >
      <h2 style={{backgroundColor : 'white',
                opacity:0.7
                }}>
      "Epochs of Elegance: Art & History Museum"
      </h2>
      <h3 style={{backgroundColor : 'white',
                opacity:0.7
                }}>"Journey Through Time: Discovering Civilization's Greatest Achievements"</h3>
      <NavigationButton route={routes.exhibitions}/>
    </div>
  );
}

export default IntroPage;