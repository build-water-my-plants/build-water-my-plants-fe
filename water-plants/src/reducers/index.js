import {
  FETCHING_PLANT_START,
  FETCHING_PLANT_SUCCESS,
  FETCHING_PLANT_FAILURE,
  POSTING_PLANT_START,
  POSTING_PLANT_FAILURE,
  POSTING_PLANT_SUCCESS,
  DELETING_PLANT_START,
  DELETING_PLANT_FAILURE,
  DELETING_PLANT_SUCCESS,
  UPDATING_PLANT_START,
  UPDATING_PLANT_SUCCESS,
  UPDATING_PLANT_FAILURE
} from '../actions';

const initialState = {
  plants: [],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PLANT_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };

    case FETCHING_PLANT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        plants: action.payload
      };

    case FETCHING_PLANT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: `Unable to load Plants: ${action.payload}`
      };

    /* ===== POST ===== */
    case POSTING_PLANT_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case POSTING_PLANT_SUCCESS:
      // console.log("Posing", POSTING_PLANT_SUCCESS)
      return {
        ...state,
        isFetching: false,
        // plants: action.payload
        plants: state.plants.push(action.payload)
      };
    case POSTING_PLANT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: `Unable to post New Plant: ${action.payload}`
      };

    /* ===== DELETE ===== */
    case DELETING_PLANT_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case DELETING_PLANT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        // plants: action.payload
        // plants: state.plants.push(action.payload)
        plants: state.plants.filter(plant => plant.id !== action.payload)
      };
    case DELETING_PLANT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: `Unable to delete Plant: ${action.payload}`
      };

    /* =====UPDATE =====*/
    case UPDATING_PLANT_START:
      console.log(UPDATING_PLANT_START);
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case UPDATING_PLANT_SUCCESS:
      console.log(UPDATING_PLANT_SUCCESS);
      return {
        ...state,
        isLoading: false,
        error: '',
        //   plants: action.payload
        // plants: state.plants.push(action.payload)
          plants: state.plants.map(plant => plant.id === action.payload.id ? action.payload : plant)
        // plants: state.plants.filter(plant => plant.id !== action.payload)
      };
    case UPDATING_PLANT_FAILURE:
      console.log(UPDATING_PLANT_FAILURE);
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
