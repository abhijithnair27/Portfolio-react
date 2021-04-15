import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from './Components/Main/Main';
import Pro from './Components/Pro/Pro';
import Cert from './Components/Cert/Cert';
import Navigation from './Components/Navigation/Navigation';


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/projects">
          <Pro />
        </Route>
        <Route path="/certificate">
          <Cert />
        </Route>
        <Route path="*">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
