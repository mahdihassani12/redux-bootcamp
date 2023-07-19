const { createStore, applyMiddleware } = require("redux");
const loggerMiddleware = require("redux-logger").createLogger();

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
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        posts: ["HTML"],
      };

    default:
      break;
  }
};

// Store
const store = createStore(postsReducer, applyMiddleware(loggerMiddleware));
const subscribe = () => {
  const data = store.getState();
  console.log(data);
};

// Dispatch
store.dispatch(fetchPostRequest());
