import { createStore, applyMiddleware, combineReducers } from "redux";
import { postsReducer, postReducer } from "../reducers/postsReducers";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
