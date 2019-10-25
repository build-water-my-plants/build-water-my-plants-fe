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
            console.log("TCL: getPlants -> res", res)
            dispatch({type: FETCHING_PLANT_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err.response)
            dispatch({type: FETCHING_PLANT_FAILURE, payload: err})
        })
    }
}


// ===== POST ===== 

export const POSTING_PLANT_START =   'POSTING_PLANT_START'
export const POSTING_PLANT_SUCCESS = 'POSTING_PLANT_SUCCESS'
export const POSTING_PLANT_FAILURE = 'POSTING_PLANT_FAILURE'
export const postPlant = (newPlant) => dispatch => {
    dispatch({ type: POSTING_PLANT_START})
    axios
        .post('https://lambda-water-my-plants.herokuapp.com/api/plants',  newPlant, {headers: {authorization: localStorage.getItem('token')}})
        .then(res => {
            console.log(res)
            dispatch({ type: POSTING_PLANT_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('something terrible happened')
            dispatch({ type: POSTING_PLANT_FAILURE, payload: err})
        })
}

// ===== DELETE =====
export const DELETING_PLANT_START =   'DELETING_PLANT_START'
export const DELETING_PLANT_FAILURE = 'DELETING_PLANT_FAILURE'
export const DELETING_PLANT_SUCCESS = 'DELETING_PLANT_SUCCESS'
export const deletePlant = (plantId) => dispatch => {
    dispatch({ type: DELETING_PLANT_START})
    axios
        .delete(`https://lambda-water-my-plants.herokuapp.com/api/plants/${plantId}`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETING_PLANT_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('something terrible happened')
            dispatch({ type: DELETING_PLANT_FAILURE, payload: err})
        })
}

// ===== UPDATING =====

// export const UPDATING_PLANT_START =   'UPDATING_PLANT_START'
// export const UPDATING_PLANT_FAILURE = 'UPDATING_PLANT_FAILURE'
// export const UPDATING_PLANT_SUCCESS = 'UPDATING_PLANT_SUCCESS'
// export const updatePlant = (plantId) => dispatch => {
//     dispatch({ type: UPDATING_PLANT_START})
//     axios
//         .put(`https://lambda-water-my-plants.herokuapp.com/api/plants/${plantId}`)
//         .then(res => {
//             console.log(res)
//             dispatch({ type: UPDATING_PLANT_SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//             console.log('something terrible happened')
//             dispatch({ type: UPDATING_PLANT_FAILURE, payload: err})
//         })
// }