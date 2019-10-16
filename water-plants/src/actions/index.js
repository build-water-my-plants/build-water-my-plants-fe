import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

export const getUsers = () => dispatch => {
    dispatch({type: GET_USERS});
    axios
    .get('http://localhost:5000/api/users')
    .then(response => {
      dispatch({ type: GET_USERS, payload: response.data });
    })
    .catch(err => dispatch({ type: GET_FAILURE, payload: err }));
};


export const addUser = (newUser) => dispatch => {
    dispatch( {type:GET_USERS})
  axios
  .post("http://localhost:5000/api/users", newUser)
    .then(response => dispatch(
        { type: GET_SUCCESS,  
           payload:response.data}))
    .catch(error => dispatch(
        { type: GET_FAILURE, 
        payload: error }));
  };