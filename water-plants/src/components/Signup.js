import React from "react";

class Signup extends React.Component {
    state = {
      creds: {
        username: "",
        password: ""
      }
    };

    render() {
        return (
          <div className="signup" >
            <div className="form-header">
              <h2> Water My Plants</h2>
                <img src= "https://lambdaschoolstudents.slack.com/files/UL8BGQNQ6/FPGCJGN56/logo_copy.pnghttps://lambdaschoolstudents.slack.com/files/UL8BGQNQ6/FPGCJGN56/logo_copy.png" alt="logo"/> 
            </div>
          <div className="form-box">
           <form>
           <h2>Water My Plants helps</h2>
           <h2>to keep your plants alive.</h2>
           <i class="fas fa-user">
          <input 
            type="text"
            name="username"
            placeholder="Full Name"
            value={this.state.creds.username}
            onChange={this.handleChange}
          />
          </i>
          <i class="far fa-envelope">
          <input
            type="email"
            name="email"
            placeholder="Email"
          />
          </i>
          <i class="fas fa-phone-alt">
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
          />
          </i>
          <i class="fas fa-unlock-alt">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.creds.password}
            onChange={this.handleChange}
          />
          </i>
          <i class="fas fa-unlock-alt">
          <input
            type="text"
            name="password"
            placeholder="Confirm Password"
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