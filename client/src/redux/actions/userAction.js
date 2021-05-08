import {
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../actionTypes/userConstants";

import { userLoginPost } from "../api/userLoginapi";
import { userSignupPost } from "../api/userSignupapi";

// user register action
export const userRegister = (username, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const { data } = await userSignupPost(username, email, password);
    console.log(data);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userOnfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload: error,
    });
  }
};

//user Login action
export const userLogin = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { data } = await userLoginPost(email, password);
    console.log(data);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload: error,
    });
  }
};

// logout action
export const userLogout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};
