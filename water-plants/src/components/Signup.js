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
              <h2>Signup Page</h2>
                <img src="https://images.pexels.com/photos/1877878/pexels-photo-1877878.jpeg?cs=srgb&dl=green-plants-houseplants-indoor-plants-1877878.jpg&fm=jpg" alt="mini greenhouse" />
           <form>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
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
                 <input
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                 <button>Sign up</button>
           </form>
           
            </div>
        )
    }
}

export default Signup