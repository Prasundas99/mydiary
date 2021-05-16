import {
  NOTES_FETCH_REQUEST,
  NOTES_FETCH_SUCCESS,
  NOTES_FETCH_FAILED,
  NOTES_POST_REQUEST,
  NOTES_POST_SUCCESS,
  NOTES_POST_FAILED,
  NOTES_UPDATE_REQUEST,
  NOTES_UPDATE_SUCCESS,
  NOTES_UPDATE_FAILED,
  NOTES_DELETE_REQUEST,
  NOTES_DELETE_SUCCESS,
  NOTES_DELETE_FAILED,
} from "../actionTypes/notesConstants;";


import axios from "axios";

// get user NOTES action
export const getNOTES = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NOTES_FETCH_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/users/notes",
      config
    );
    console.log("ACTION:", data);

    dispatch({
      type: NOTES_FETCH_SUCCESS,
      payload: data,
    });
    console.log("fetch NOTES");
  } catch (error) {
    dispatch({
      type: NOTES_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// post user NOTES action
export const postNOTES = (NOTES) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NOTES_POST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/users/notes",
      NOTES,
      config
    );

    dispatch({
      type: NOTES_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTES_POST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// update user NOTES action
export const updateNOTES = (NOTES) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NOTES_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      "http://localhost:5000/users/notes",
      NOTES,
      config
    );

    dispatch({
      type: NOTES_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTES_UPDATE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// delete user NOTES action
export const deleteNOTES = (NOTES) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NOTES_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      "Content-Type": "application/json",
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(
     "http://localhost:5000/users/notes",
      NOTES,
      config
    );

    dispatch({
      type: NOTES_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTES_DELETE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



