import { createStore } from "redux";
import notesReducer from '../reducers/notesReducers';
const store = createStore(notesReducer);
export default store;