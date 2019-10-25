import React, {useEffect} from 'react'

import {getPlants} from '../actions/index'

import {connect} from 'react-redux'

import PlantCard from './PlantCard'

const PlantPage = (props) => {
// console.log("TCL: PlantPage -> isFetching", isFetching)
console.log("TCL: PlantPage -> props", props)
    // const [addPlantName, setAddPlantName] = useState('')
    // const [addPlantType, setAddPlantType] = useState('')
    // const [addPlantLocation, setAddPlantLocation] = useState('')
    // const [addPlantWaterSchedule, setAddWaterSchedule] = useState('')

    useEffect(() => {
       props.getPlants()
    }, [])
    
    if(props.isFetching) {
        return <h2>Fetching plant for ya!</h2>
    }

    // const addNewPlant = e => {
    //     e.preventDefault()
    //     let newPlant = {
    //         name: addPlantName,
    //         type: addPlantType,
    //         location: addPlantLocation,
    //         waterSchedule: addPlantWaterSchedule
    //     }
    //     postPlant(newPlant)
    // }
console.log("props", props)
    return (
        <div>
            <h1>List of Plants</h1>
                {props.plants.map(plant => {
                return <PlantCard plant={plant} key={plant.id} />
            })}
            {/* <br/>
            Plant Name: <input onChange={(e) => {setAddPlantName(e.target.value)}} value={addPlantName}/> 
            <br/>
            Plant Type: <input onChange={(e) => {setAddPlantType(e.target.value)}} value={addPlantType}/>
            <br/>
            Plant Location: <input onChange={(e) => {setAddPlantLocation(e.target.value)}} value={addPlantLocation}/>
            <br/>
            Plant Water Schedule: <input onChange={(e) => {setAddWaterSchedule(e.target.value)}} value={addPlantWaterSchedule}/>
            <br/>
            <button onClick={addNewPlant}>Add Plant</button> */}
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

export default connect(mapStateToProps, {getPlants})(PlantPage)
// export default PlantPage
