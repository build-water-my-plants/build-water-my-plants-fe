import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL:"https://lambda-water-my-plants.herokuapp.com",
        headers: {
            Authorization:token
        }
    });
}