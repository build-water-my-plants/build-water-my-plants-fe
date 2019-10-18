import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    return axios.create({
        baseURL:"https://watermyplantsbe.herokuapp.com/api/auth/login",
        headers: {
            Authorization:token
        }
    });
}