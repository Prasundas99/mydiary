import axios from 'axios';

const url= "http://localhost:5000/users/signup";
const config = {
    "Content-Type" : "application/json",
};

export const userSignupPost = (username, email , password) =>{
    axios.post(url,
         {username, email, password},
          config
          );
}