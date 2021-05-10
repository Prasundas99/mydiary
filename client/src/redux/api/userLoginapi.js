import axios from 'axios';

const url= "http://localhost:5000/users/login";
const config = {
    "Content-Type" : "application/json",
};

export const userLoginPost = (email , password) =>{
    console.log(email);
axios.post(url,
    {email, password},
     config
     );

     
}     