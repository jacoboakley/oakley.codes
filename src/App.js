import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* My Components */
import {LandingPage} from './Pages/LandingPage/LandingPage';

import './App.css';

const App = () => {
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router> 
  );
}


// Placeholder for route testing
function About() {
  return <h2>About</h2>;
}

export default App;
