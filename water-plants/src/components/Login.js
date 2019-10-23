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
    axiosWithAuth()
      .post("http://localhost:3000/api/auth/login", this.state.creds)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
    
      <div className="login">
        <div className="form-header">
        <h2> Water My Plants</h2>
           {/* <img src= "https://lambdaschoolstudents.slack.com/files/UL8BGQNQ6/FPGCJGN56/logo_copy.pnghttps://lambdaschoolstudents.slack.com/files/UL8BGQNQ6/FPGCJGN56/logo_copy.png" alt="logo"/> */}
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
          <button>Log in</button>
        </form>
        </div>
        <h3>Not a member, <Link to="/signup">Signup</Link> here.</h3>
      </div>
    );
  }
}

export default Login;

// import React from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
// import {Form, Field, withFormik} from "formik";
// import * as Yup from "yup";

// const Login = ({errors, touched}) => {
//   // const [users, setUsers] = useState([])
//     return(
//       <div className="login">
//          <h2> Login</h2>
//          <div className="form-box">
//         <Form>
//           <h2>Water My Plants helps</h2>
//            <h2>to keep your plants alive.</h2>
//         <i className="fas fa-user">
//             <Field type="text" name="username" placeholder="UserName" /> 
//             {touched.username && errors.username &&(
//             <p className="error">{errors.username}</p>
//             )}
//         </i>
//         <i className="fas fa-unlock-alt">
//             <Field type="text" name="password" placeholder="Password"/>
//             {touched.password && errors.password &&(
//             <p className="error">{errors.password}</p>
//             )}
//         </i>   
//             <button type="submit">Submit</button>
//         </Form>
//         </div>
//         {/* {users.map (username => (
//           <p>{username.name}</p>
//         ))} */}
//         </div>
//     )
// }

// const FormikUsersForm = withFormik({
//   mapPropsToValues({ username, password  }){
//     return {
//     username: username || "",
//     password: password || ""
//     }
//   },

//   validationSchema: Yup.object().shape({
//     username: Yup.string().required(),
//     password: Yup.string().min(6).required()
// }),
  
// handleSubmit(values){
//   // console.log(values)
//   axiosWithAuth()
//   .post("api/auth/login",values )
//   .then(res => console.log(res) )
//   .catch(error => console.log(error.response))
// },

// })(Login) 


// export default FormikUsersForm