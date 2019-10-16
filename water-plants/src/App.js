import React from 'react';
// import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import './App.css';

function App() {
  return (
    <div className="App">
     <h1> Build Water My Plants - FrontEnd</h1>
     <img src="https://images.pexels.com/photos/1906439/pexels-photo-1906439.jpeg?cs=srgb&dl=house-plant-plants-pot-plants-1906439.jpg&fm=jpg" alt="succulents"/>
     {/* <h3> Objectives:</h3>
     <h4>Login Page & Signup Page including-</h4>
     <p> JSON Web Tokens</p>
     <p>React</p>
     <p>Protected Routes</p>
    <p>Semantic UI and/or Styled Components</p> */}

    <h2>Forms</h2>
    <Login />
    {/* <Signup /> */}
    </div>
  );
}

export default App;
