
import axios from 'axios'

export const GETTING_PLANT_START = 'GETTING_PLANT_START'

export const getPlants = () => {
    return dispatch => {
        dispatch({type: GETTING_PLANT_START})
        axios.get()
        .then(res => {
            console.log(res)
        })
    }
}

