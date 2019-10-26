import React from "react";
import axios from "axios";

class Signup extends React.Component {
    state = {
      newCreds: {
        firstName:"",
        lastName: "",
        username: "",
        password: "",
        phoneNumber: ""
       }
    };
    handleChange = ev => {
      this.setState({
        newCreds: {
          ...this.state.newCreds,
          [ev.target.name]: ev.target.value
        }
      });
    };

    register = ev => {
      ev.preventDefault();
      axios
        .post("/api/auth/register", this.state.newCreds)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          // this.props.addNewUser(this.state.newCreds);
        
        })
        .catch(error => console.log(error));
        this.setState({newCreds: ""})
    };

    render() {
        return (
          <div className="signup" >
           { console.log(this.state.newCreds)}
          
            <div className="form-header">
              <h2> Signup</h2>
            </div>
          <div className="form-box">
           <form onSubmit={this.register}>
           <h2>Water My Plants helps</h2>
           <h2>to keep your plants alive.</h2>
           <i className="fas fa-user">
          <input 
            type="text"
            name="firstName"
            placeholder="First Name"
            required = "required"
            value={this.state.newCreds.firstName}
            onChange={this.handleChange}
          />
          </i>
          <i className="fas fa-user">
            <input 
            type="text"
            name="lastName"
            placeholder="Last Name"
            required = "required"
            value={this.state.newCreds.lastName}
            onChange={this.handleChange}
            />
          </i>
           <i className="fas fa-user">
          <input 
            type="text"
            name="username"
            placeholder="UserName"
            required = "required"
            value={this.state.newCreds.username}
            onChange={this.handleChange}
          />
          </i>
          <i className="fas fa-unlock-alt">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required = "required"
            value={this.state.newCreds.password}
            onChange={this.handleChange}
          />
          </i>
          <i className="fas fa-phone">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            required = "required"
            value={this.state.newCreds.phoneNumber}
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
