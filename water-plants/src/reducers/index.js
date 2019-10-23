import {
  GETTING_PLANT_START,
} from '../actions'

const initialState = {
  plants: [],
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {

  switch (action.type) {


      default:
          return state;
  }

}