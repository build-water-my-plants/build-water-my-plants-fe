import React, {useEffect} from 'react'

import {getPlants} from '../actions/index'

import {connect} from 'react-redux';


const PlantPage = (props) => {

    useEffect(() => {
       props.getPlants()
    }, [props])


    return (
        <div>
            <h1>Hello</h1>
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

export default connect(mapStateToProps, {getPlants}) (PlantPage)
// export default PlantPage
