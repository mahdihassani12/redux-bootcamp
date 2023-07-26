import React, { useEffect } from "react";
import SearchPost from "./SearchPost";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../redux/actions/postsActions";
import "./Posts.css";

const PostsList = () => {
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);

  //get data from store
  const { loading, error, posts, post } = useSelector((data) => data);

  return (
    <>
      <SearchPost />
      <div className="posts-list">
        <h1>Total Posts {posts.length}</h1>
        {loading ? (
          <h2>Loading</h2>
        ) : error ? (
          <h2 style={{ color: "red" }}>
            {error.response.status && "No Post Found"}
          </h2>
        ) : (
          posts.map((post) => (
            <div className="post-details">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PostsList;
