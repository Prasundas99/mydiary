import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../actionTypes/notesConstants';

const Notes = (notes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {notes: action.payload};
    case CREATE:
      console.log(notes);
      return [...notes, action.payload];

    case UPDATE:
      return {
        notes: action.payload
      };

    case DELETE:
      return{
        notes: action.payload
      }

    
    default:
      console.log(notes);
      return notes;
      
  }
};

export default Notes;