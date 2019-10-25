import React, {useState} from 'react'

import {connect} from 'react-redux'

import {deletePlant, updatePlant} from '../actions'

const PlantCard = (props) => {
console.log("TCL: PlantCard -> props", props)
const [currentPlant, setCurrentPlant] = useState(props.plant)

const handleChanges = e => {
    setCurrentPlant({...currentPlant, [e.target.name]: e.target.value})
}
    
 const handleDeletePlant = e => {
     e.preventDefault()
     props.deletePlant(props.plant.id)
 }
    
    return (
        <div>
            <p>Plant Name: {props.plant.name}</p>
            <p>Plant Type: {props.plant.type}</p>
            <p>Plant Location: {props.plant.location}</p>
            <p>Plant Watering Schedule: {props.plant.waterSchedule}</p>
            {/* <p>{props.plant.nextwatering}</p> */}
            <button>Update</button>
            <button onClick={handleDeletePlant}>Delete</button>
        </div>
    )
}

export default connect(null, {deletePlant})(PlantCard)
