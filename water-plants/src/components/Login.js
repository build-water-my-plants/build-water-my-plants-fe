import React from "react";
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
    axiosWithAuth()
      .post("/api/login", this.state.creds)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/member");
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="login">
       <h2>Login Page</h2>
        <img src="https://images.pexels.com/photos/1845290/pexels-photo-1845290.jpeg?cs=srgb&dl=houseplant-plants-pot-plants-1845290.jpg&fm=jpg" alt="succulents" />
      
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.creds.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.creds.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
