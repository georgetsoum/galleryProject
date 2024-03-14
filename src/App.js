import './App.css';
import {Route, Switch} from 'wouter';
import {routes} from './config/routes';
import IntroPage from './pages/IntroPage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import ExhibitsPage from './pages/ExhibitsPage';
import ExhibitsInfoPage from './pages/ExhibitsInfoPage';

function App() {
  /* Each route is matched with a page component here */
  return (
    <Switch className="App">
      <Route path={routes.intro} component={IntroPage} />
      <Route path={routes.exhibitions} component={ExhibitionsPage} />
      <Route path={routes.exhibition} component={ExhibitsPage} />
      <Route path={routes.exhibit} component={ExhibitsInfoPage} />
      {/* TODO match rest of routes with their components */}
    </Switch>
  );
}

export default App;
