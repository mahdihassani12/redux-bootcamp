import {
  FETCH_POSTS_REQUEST,
  FETCH_POST_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST_FAILURE
} from "./postActionTypes";
import axios from "axios";
const apiURL = "https://jsonplaceholder.typicode.com/posts";

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostRequest = () => {
    return {
      type: FETCH_POST_REQUEST,
    };
  };

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostSuccess = (post) => {
    return {
      type: FETCH_POST_SUCCESS,
      payload: post,
    };
  };

const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

const fetchPostFailure = (error) => {
    return {
      type: FETCH_POST_FAILURE,
      payload: error,
    };
  };

const fetchPostsAction = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const res = await axios.get(apiURL);
      dispatch(fetchPostsSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostsFailure(error));
    }
  };
};

const fetchPostAction = (id) => {
    return async (dispatch) => {
      dispatch(fetchPostRequest());
      try {
        const res = await axios.get(`apiURL/${id}`);
        dispatch(fetchPostSuccess(res.data));
      } catch (error) {
        dispatch(fetchPostFailure(error));
      }
    };
  };