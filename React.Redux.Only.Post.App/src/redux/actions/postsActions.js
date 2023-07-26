import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./postActionTypes";
const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

const fetchPostsAction = () => {
  return async (dispatch) => {
    try {
    } catch (error) {}
  };
};
