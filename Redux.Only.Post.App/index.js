const { createStore } = require("redux");

// Initial state
const initialState = {
  posts: [],
};

// actions - action creators

const addPostAction = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

const removePostAction = (id) => {
  return {
    type: "REMOVE_POST",
    payload: id,
  };
};

// reducer
const postReducer = (state = initialState, action) => {};

// store
const store = createStore(postReducer);

// dispatch
