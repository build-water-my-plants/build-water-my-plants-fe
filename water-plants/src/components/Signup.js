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
        .post("http://localhost:3000/api/auth/register", this.state.creds)
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


// import React, {useState} from "react";
// import {Form, Field, withFormik} from "formik";
// import * as Yup from "yup";
// import axios from "axios"

// const Signup = ({errors, touched}) => {
//   const [users] = useState([])
//     return(
//       <div className="Signup">
//          <h2> Signup</h2>
//          <div className="form-box">
//         <Form>
//         <h2>Water My Plants helps</h2>
//         <h2>to keep your plants alive.</h2>
//         <i className="fas fa-user">
//             <Field type="text" name="firstname" placeholder="First Name" /> 
//             {touched.firstname && errors.firstname &&(
//             <p className="error">{errors.firstname}</p>
//             )}
//         </i>

//         <i className="fas fa-user">
//             <Field type="text" name="lastname" placeholder="Last Name" /> 
//             {touched.lastname && errors.lastname &&(
//             <p className="error">{errors.lastname}</p>
//             )}
//         </i>

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
//         <i className="fas fa-phone">
//             <Field type="number" name="phoneNumber" placeholder="Phone Number"/>
//             {touched.phoneNumber && errors.phoneNumber&&(
//             <p className="error">{errors.phoneNumber}</p>
//             )}
//         </i> 
//             <button type="submit">Submit</button>
//         </Form>
//         </div>
//         {users.map (username => (
//           <p>{username.name}</p>
//         ))}
//         </div>
//     )
// }

// const FormikUsersForm = withFormik({
//   mapPropsToValues({ firstname, lastname, username, password, phoneNumber  }){
//     return {
//     firstname: firstname||"",
//     lastname: lastname||"",
//     username: username||"",
//     password: password || "",
//     phoneNumber: phoneNumber ||""
//     }
//   },

//   validationSchema: Yup.object().shape({
//     firstname: Yup.string().required(),
//     lastname: Yup.string().required(),
//     username: Yup.string().required(),
//     password: Yup.string().min(6).required(),
//     phoneNumber: Yup.number().required()
// }),
  
// handleSubmit(values){
//   // console.log(values)
//   axios
//   .post("api/auth/register",values )
//   .then(res => console.log(res) )
//   .catch(error => console.log(error.response))
// },

// })(Signup) 


// export default FormikUsersForm