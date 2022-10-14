import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATEDETAILS,
} from "../actionTypes/notesConstants";

const initialstate = {
  notes: [],
  data: {},
};

const Notes = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, notes: action.payload };
    case CREATE:
      //console.log(data);
      return { ...state, data: action.payload };

    case UPDATEDETAILS:
      return { ...state, notes: action.payload };

    case UPDATE:
      return {
        ...state,
        data: action.payload,
      };

    case DELETE:
      return {
        ...state,
        data: action.payload,
      };

    default:
      // console.log(notes);
      return state;
  }
};

export default Notes;
