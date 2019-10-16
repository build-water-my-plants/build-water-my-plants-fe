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
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                />
                 <button>Sign up</button>
           </form>
           
            </div>
        )
    }
}

export default Signup