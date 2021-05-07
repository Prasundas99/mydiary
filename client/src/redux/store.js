import {combineReducers, applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension0';


import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
  });

//GET user info from localstorage
const userInfoFromLocalstorage = localStorage.getItem("userInfo");

const initialState = {
    userLogin: {userInfo: userInfoFromLocalstorage},
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;