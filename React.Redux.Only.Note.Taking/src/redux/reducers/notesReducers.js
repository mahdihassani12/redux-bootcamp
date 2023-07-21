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
      const newState = {
        id: Math.random(),
        title: action.payload.title,
        content: action.payload.content,
      };

      const updateNotes = [...state.notes, newState];
      localStorage.setItem("notes", JSON.stringify(updateNotes));

      return {
        notes: [...state.notes, newState],
      };
    case DELETE_NOTE:
      const filteredNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      localStorage.setItem("notes", JSON.stringify(filteredNotes));

      return {
        ...state,
        notes: filteredNotes,
      };
    case FETCH_NOTES:
      return {
        notes: JSON.parse(localStorage.getItem("notes"))
          ? JSON.parse(localStorage.getItem("notes"))
          : [],
      };
    default:
      break;
  }
};

export default notesReducer;
