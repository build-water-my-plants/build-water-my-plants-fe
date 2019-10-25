import React, {useState} from 'react'

import {connect} from 'react-redux'

import {postPlant} from '../actions'

const AddPlant = ({postPlant}) => {
    const [addPlantName, setAddPlantName] = useState('')
    const [addPlantType, setAddPlantType] = useState('')
    const [addPlantLocation, setAddPlantLocation] = useState('')
    const [addPlantWaterSchedule, setAddWaterSchedule] = useState('')
    
    const addNewPlant = e => {
        e.preventDefault()
        let newPlant = {
            name: addPlantName,
            type: addPlantType,
            location: addPlantLocation,
            waterSchedule: addPlantWaterSchedule
        }
        postPlant(newPlant)
    }

    return (
        <div>
        <form onSubmit={addNewPlant}>
            <h2>Add Your Plant</h2>
            <input
                type="text"
                name="name"
                value={addPlantName}
                placeholder="Plant Name"
                onChange={(e) => {setAddPlantName(e.target.value)}}
            />
            <input
                type="text"
                name="type"
                value={addPlantType}
                placeholder="Type"
                onChange={(e) => {setAddPlantType(e.target.value)}}
            />
            <input
                type="text"
                name="location"
                value={addPlantLocation}
                placeholder="Location"
                onChange={(e) => {setAddPlantLocation(e.target.value)}}
            />
            <input
                type="text"
                name="waterSchedule"
                value={addPlantWaterSchedule}
                placeholder="Watering Schedule"
                onChange={(e) => {setAddWaterSchedule(e.target.value)}}
            />
            <button>Add Plant</button>
        </form>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        plants: state.plants,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {postPlant})(AddPlant)
