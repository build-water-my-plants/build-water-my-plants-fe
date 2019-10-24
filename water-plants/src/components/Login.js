import React from "react";
import {Link } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth";



class Login extends React.Component {
  state = {
    creds: {
      username: "",
      password: ""
    }
  };

  handleChange = ev => {
    this.setState({
      creds: {
        ...this.state.creds,
        [ev.target.name]: ev.target.value
      }
    });
  };

  login = ev => {
    ev.preventDefault();
    console.log('LOGIN', this.state.creds)
    axiosWithAuth()
      .post("/api/auth/login", this.state.creds)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/protected");
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
    
      <div className="login">
        <div className="form-header">
        <h2> Water My Plants</h2>
           <img src= "https://lambdaschoolstudents.slack.com/files/UL8BGQNQ6/FPGCJGN56/logo_copy.pnghttps://lambdaschoolstudents.slack.com/files/UL8BGQNQ6/FPGCJGN56/logo_copy.png" alt="logo"/>
        </div>

      <div className="form-box">
        <form onSubmit={this.login}>
          <h2>Water My Plants helps</h2>
          <h2>to keep your plants alive.</h2>
          <i className="fas fa-user">
          <input 
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.creds.username}
            onChange={this.handleChange}
          />
          </i>
          {/* <i className="far fa-envelope">
          <input
            type="email"
            name="email"
            placeholder="Email"
          />
          </i> */}
          <i className="fas fa-unlock-alt">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.creds.password}
            onChange={this.handleChange}
          />
          </i> 
          <button>Log in</button>
        </form>
        </div>
        <h3>Not a member, <Link to="/signup">Signup</Link> here.</h3>
      </div>
    );
  }
}

export default Login;
