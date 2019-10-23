import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Signup extends React.Component {
    state = {
      creds: {
        firstname:"",
        lastname: "",
        username: "",
        password: "",
        phoneNumber: ""
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
  
    register = ev => {
      ev.preventDefault();
      axiosWithAuth()
        .post("/api/auth/register", this.state.creds)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          this.props.history.push("/protected");
        })
        .catch(error => console.log(error));
    };

    render() {
        return (
          <div className="signup" >
            <div className="form-header">
              <h2> Water My Plants</h2>
                {/* <img src= "https://lambdaschoolstudents.slack.com/files/UL8BGQNQ6/FPGCJGN56/logo_copy.pnghttps://lambdaschoolstudents.slack.com/files/UL8BGQNQ6/FPGCJGN56/logo_copy.png" alt="logo"/>  */}
            </div>
          <div className="form-box">
           <form>
           <h2>Water My Plants helps</h2>
           <h2>to keep your plants alive.</h2>
           <i className="fas fa-user">
          <input 
            type="text"
            name="firstname"
            placeholder="First Name"
            required = "required"
            value={this.state.creds.firstname}
            onChange={this.handleChange}
          />
          </i>
          <i className="fas fa-user">
            <input 
            type="text"
            name="lastname"
            placeholder="Last Name"
            required = "required"
            value={this.state.creds.lastname}
            onChange={this.handleChange}
            />
          </i>
           <i className="fas fa-user">
          <input 
            type="text"
            name="username"
            placeholder="UserName"
            required = "required"
            value={this.state.creds.username}
            onChange={this.handleChange}
          />
          </i>
          <i className="fas fa-unlock-alt">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required = "required"
            value={this.state.creds.password}
            onChange={this.handleChange}
          />
          </i>
          <i className="fas fa-phone">
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            required = "required"
            value={this.state.creds.phoneNumber}
            onChange={this.handleChange}
          />
          </i>
              <button>Sign up</button>
           </form>
           </div>
            </div>
        )
    }
}

export default Signup