import axios from 'axios';

const url= "http://localhost:5000/users/login";
const config = {
    "Content-Type" : "application/json",
};

export const userLoginPost = (email , password) =>
    axios.post(url, email, password, {headers: {'Access-Control-Allow-Origin': '*'}}, config);