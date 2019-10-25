import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"

import PlantCard from "./components/PlantPage"

import './App.css';



function App() {
  return (
    <Router>
    <div className="App">
    <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/login">Login</Link>
          </li>
          <li>
              <Link to="/signup">Signup</Link>
          </li>

          <li>
              <Link to="/plantPage">Plant Page</Link>
          </li>

      </ul>

        <Route  exact path="/" component={Home}/>
        <Route  exact path="/login" component={Login} />
        <Route  exact path="/signup" component={Signup} />

        <Route  path ="/plantPage" component={PlantCard} />

    </div>
    
    </Router>
  );
}

export default App;
