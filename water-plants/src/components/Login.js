import React from "react";
import {Link } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Input, Button, Form } from './Styled';



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
      .post("https://lambda-water-my-plants.herokuapp.com/api/auth/login", this.state.creds)
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
        <h2>Login</h2>
        </div>

      <div className="form-box">
        <Form onSubmit={this.login}>
          <h2>Water My Plants helps<br />to keep your plants alive.</h2>
          <i className="fas fa-user">
          <Input
            type="text"
            name="username"
            placeholder="Username"

            required = "required"


            value={this.state.creds.username}
            onChange={this.handleChange}
          />
          </i>

          <i className="fas fa-unlock-alt">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required = "required"
            value={this.state.creds.password}
            onChange={this.handleChange}
          />
          </i>
          <div>
            <Button>Log in</Button>
          </div>

        </Form>
        </div>
        <h3>Not a member, <Link to="/signup">Signup</Link> here.</h3>
      </div>
    );
  }
}

export default Login;
