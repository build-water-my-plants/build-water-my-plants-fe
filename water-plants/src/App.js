import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import PlantPage from "./components/PlantPage"
import AddPlant from './components/AddPlant'
import PrivateRoute from "./components/PrivateRoute"


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
      </ul>
    
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/login" component={Login} />
        {/* <Route  exact path="/login" render={(props) =>  <Login {...props} /> } /> */}
        <Route  exact path="/signup" component={Signup} />


        <PrivateRoute exact path="/protected" component={AddPlant} />
        <PrivateRoute exact path="/protected" component={PlantPage} />


     

     
    </div>
    
    </Router>
  );
}

export default App;
