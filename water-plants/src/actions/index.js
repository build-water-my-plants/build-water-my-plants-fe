import axios from 'axios'
// import {axiosWithAuth} from '../utils/axiosWithAuth'

export const FETCHING_PLANT_START = 'FETCHING_PLANT_START'
export const FETCHING_PLANT_SUCCESS = 'FETCHING_PLANT_SUCCESS'
export const FETCHING_PLANT_FAILURE = 'FETCHING_PLANT_FAILURE'

export const getPlants = () => {
    return dispatch => {
        dispatch({type: FETCHING_PLANT_START})
        axios
        .get('https://lambda-water-my-plants.herokuapp.com/api/plants', {headers: {authorization: localStorage.getItem('token')}})
        .then(res => {
            console.log('FETCH', res)
            dispatch({type: FETCHING_PLANT_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err.response)
            dispatch({type: FETCHING_PLANT_FAILURE, payload: err})
        })
    }
}
