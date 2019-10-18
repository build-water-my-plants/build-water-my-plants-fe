import {GET_USERS, GET_SUCCESS, GET_FAILURE} from "../actions"

const initialState = {
  users:[],
  getUsers: false,
  addUser: false,
}

export const userReducer = (state = initialState,action) => {
  switch (action.type) {
    case GET_USERS:
    return {
      ...state,
      error: "",
      getUsers: true,
    };
  case GET_SUCCESS:
    return { 
      ...state,
      getUsers: false,
      usersfs: action.payload,
      error: "",
    };
  case GET_FAILURE:
    return {
     ...state,
     getUsers: false,
     error: action.payload,    
    };
    
  default:
    return state;
  }
}
