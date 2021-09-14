import { FETCH_ALL, CREATE, UPDATE, DELETE, UPDATEDETAILS} from '../actionTypes/notesConstants';

const initialstate = {
  notes: [],
  data: {}
}

const Notes = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {notes: action.payload};
    case CREATE:
      //console.log(data);
      return {data: action.payload};

    case UPDATEDETAILS:
      return {notes: action.payload};
      
    case UPDATE:
      return {
        data: action.payload
      };

    case DELETE:
      return{
        data: action.payload
      }

    
    default:
      // console.log(notes);
      return state;
      
  }
};

export default Notes ;

