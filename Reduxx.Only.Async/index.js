const { createStore, applyMiddleware } = require("redux");
const loggerMiddleware = require("redux-logger").createLogger();
const thunk = require("redux-thunk").default;
const axios = require("axios");

// Initial state
const initialState = {
  posts: [],
  errors: "",
  loading: false,
};

// Actions
const REQUEST_STARTED = "REQUEST_STARTED";
const fetchPostRequest = () => {
  return {
    type: REQUEST_STARTED,
  };
};

const FETCH_SUCCESS = "FETCH_SUCCESS";
const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_SUCCESS,
    payload: posts,
  };
};

const FETCH_FAILURE = "FETCH_FAILURE";
const fetchPostFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};

// action to make request
const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostRequest());
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(fetchPostSuccess(data.data));
    } catch (error) {
      dispatch(fetchPostFailure(error.message));
    }
  };
};

// Reducer
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        posts: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(
  postsReducer,
  applyMiddleware(thunk)
);
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// Dispatch
store.dispatch(fetchPosts());
