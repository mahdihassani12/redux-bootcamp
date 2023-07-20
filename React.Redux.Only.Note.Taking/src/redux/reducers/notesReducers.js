import {
  ADD_NOTE,
  DELETE_NOTE,
  FETCH_NOTES,
} from "../actions/notesActionTypes";

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: [
          ...state,
          {
            id: Math.random(),
            title: action.payload.title,
            content: action.payload.content,
          },
        ],
      };
    case DELETE_NOTE:
      return {};
    case FETCH_NOTES:
      return {};
    default:
      break;
  }
};

export default notesReducer