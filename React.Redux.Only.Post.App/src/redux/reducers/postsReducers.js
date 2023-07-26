import {
  FETCH_POSTS_REQUEST,
  FETCH_POST_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST_FAILURE,
} from "../actions/postActionTypes";

// initial state
const initialState = {
  loading: false,
  posts: [],
  post: {},
  errors: "",
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_POSTS_FAILURE:
      return {
        posts: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        post: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_POST_FAILURE:
      return {
        post: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
