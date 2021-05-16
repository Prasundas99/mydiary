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


//Fetch
export const NotesReducer = (
    state = {loading: false, details: null, error: null},
    action
    ) => {
        switch (action.types) {
            
        }
    }
