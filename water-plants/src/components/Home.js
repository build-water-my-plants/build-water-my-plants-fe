import React, {useEffect} from "react";
import axios from 'axios';

const Home = () => {

    useEffect(() => {
        axios.get('https://watermyplantsbe.herokuapp.com')
        .then(res => {
            console.log(res)
        })
    },[])
    return(
        <div className="home">
         <h1> Build Water My Plants - FrontEnd</h1>
     <img src="https://images.pexels.com/photos/1906439/pexels-photo-1906439.jpeg?cs=srgb&dl=house-plant-plants-pot-plants-1906439.jpg&fm=jpg" alt="succulents"/>
        </div>
    )
}
export default Home