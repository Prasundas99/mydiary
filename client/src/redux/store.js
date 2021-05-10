import {combineReducers, applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import {
  getNotesReducer,
  postNotesReducer,
  updateNotesReducer,
  deleteNotesReducer,
} from "./reducers/NotesReducer";


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    userFetchNotes: getNotesReducer,
    userPostNotes: postNotesReducer,
    userUpdateNotes: updateNotesReducer,
    userDeleteNotes: deleteNotesReducer,
  });

//GET user info from localstorage
const userInfoFromLocalstorage = localStorage.getItem("userInfo");

const initialState = {
    userLogin: {userInfo: userInfoFromLocalstorage},
    
};

console.log(initialState);

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;