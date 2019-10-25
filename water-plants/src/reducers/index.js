import {

  FETCHING_PLANT_START,

   

} from '../actions'

const initialState = {
  plants: [],
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {


  switch (action.type) {
      case FETCHING_PLANT_START:
          return {
              ...state,
              isFetching: true,
              error: ''
          }

  


      default:
          return state;
  }

}
