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
              <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                 <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                />
                 <input
                    type="text"
                    name="password"
                    placeholder="Password"
                />
                  <input
                    type="text"
                    name="password"
                    placeholder="Confirm Password"
                />
                 <button>Sign up</button>
           </form>
           </div>
            </div>
        )
    }
}

export default Signup