import React, {useState} from 'react'

import {connect} from 'react-redux'

import {deletePlant, updatePlant} from '../actions'

import {Button, Modal, Card} from 'semantic-ui-react'

import './PlantCard.css';

const PlantCard = (props) => {
console.log("TCL: PlantCard -> props", props)
const [currentPlant, setCurrentPlant] = useState(props.plant)
console.log("TCL: PlantCard -> props.plant", props.plant)
const handleChanges = e => {
    setCurrentPlant({...currentPlant, [e.target.name]: e.target.value})
}
    
 const handleDeletePlant = e => {
     e.preventDefault()
     props.deletePlant(props.plant.id)
 }

 const handleUpdatePlant = e => {
    e.preventDefault()
    props.updatePlant(currentPlant)

 }
    return (
        <div className="plant">
            <Card>
                <Card.Content>
                    <Card.Header>Plant Name: {props.plant.name}</Card.Header>
                    <Card.Meta>
                        <span>Type: {props.plant.type}</span>
                        <span>Location: {props.plant.location}</span>
                        <span>Watering Schedule: {props.plant.waterSchedule}</span>
                    </Card.Meta>
                    <Card.Description>
                        <Modal size='mini' trigger={<Button>Edit!</Button>}>
                            <Modal.Content>
                                <Modal.Description>
                                <input name='name' value={currentPlant.name} onChange={handleChanges}/>
                                <input name='type' value={currentPlant.type} onChange={handleChanges}/>
                                <input name='location' value={currentPlant.location} onChange={handleChanges}/>
                                <input name='waterSchedule' value={currentPlant.waterSchedule} onChange={handleChanges}/>
                                </Modal.Description>
                                <div>
                                {/* <Button onClick={() => deletePlant(props.plant.id)}>Delete</Button> */}
                                <Button onClick={handleDeletePlant}>Delete</Button>
                                
                                {/* <Button onClick={_ => updatePlant(currentPlant)}>Update</Button> */}
                                <Button onClick={handleUpdatePlant}>Update</Button>
                                </div>
                            </Modal.Content>
                        </Modal>
                    </Card.Description>
                </Card.Content>
            </Card>

            
            {/* <p>Plant Name: {props.plant.name}</p> */}
            {/* <input name='name' value={currentPlant.name} onChange={handleChanges}/> */}
            {/* <p>Plant Type: {props.plant.type}</p> */}
            {/* <input name='type' value={currentPlant.type} onChange={handleChanges}/> */}
            {/* <p>Plant Location: {props.plant.location}</p> */}
            {/* <input name='location' value={currentPlant.location} onChange={handleChanges}/> */}
            {/* <p>Plant Watering Schedule: {props.plant.waterSchedule}</p> */}
            {/* <input name='waterSchedule' value={currentPlant.waterSchedule} onChange={handleChanges}/> */}
            {/* <p>{props.plant.nextwatering}</p> */}
            {/* <button onClick={handleDeletePlant}>Delete</button> */}
            {/* <button onClick={updatePlant(currentPlant)}>Update</button>  */}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        // plants: state.plants
    }
}

export default connect(mapStateToProps, {deletePlant, updatePlant})(PlantCard)
