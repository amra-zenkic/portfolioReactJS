import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/contact'>
                <Contact />
              </Route>
              
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
