import './App.css';
import Highlight from './components/Highlight/Highlight';
import Time from './components/Time/Time';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navigation">
            <ul className="navigation-list">
              <li>
                <Link to="/Highlight">Highlight</Link>
              </li>
              <li>
                <Link to="/Time">Time</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/Highlight" component={Highlight} />
          <Route exact path="/Time" component={Time} />
        </div>
      </Router>
    </div>
  );
}

export default App;