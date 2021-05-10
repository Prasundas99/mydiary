import axios from 'axios';

const url= "http://localhost:5000/users/signup";
const config = {
    "Content-Type" : "application/json",
};

export const userSignupPost = (username, email , password) =>{
    
 var data =   axios.post(url,
         {username, email, password},
          config
          );
          console.log(data);
          return data;
          
}