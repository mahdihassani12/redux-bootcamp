const { createStore } = require("redux");
// Initial state
const initialState = {
  posts: [],
};

// Actions
const REQUEST_STARTED = "REQUEST_STARTED";
const fetchPostRequest = () => {
  return {
    type: REQUEST_STARTED,
  };
};

const FETCH_SUCCESS = "FETCH_SUCCESS";
const fetchPostSuccess = () => {
  return {
    type: FETCH_SUCCESS,
  };
};

const FETCH_FAILURE = "FETCH_FAILURE";
const fetchPostFailure = () => {
  return {
    type: FETCH_FAILURE,
  };
};

// Reducer
const postsReducer = (state = initialState, action) => {};

// Store
const store = createStore(postsReducer);
const subscribe = (() => {
    const data = store.getState();
    console.log(data)
})

// Dispatch
