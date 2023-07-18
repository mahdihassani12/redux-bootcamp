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
const postReducer = (state = initialState, action) => {
  if (action.type === "ADD_POST") {
    return {
      posts: [...state.posts, action.payload],
    };
  } else if (action.type === "REMOVE_POST") {
    return {
      posts: state.posts.filter((post) => {
        return post.id !== action.payload;
      }),
    };
  } else {
    return state;
  }
};

// store
const store = createStore(postReducer);
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// dispatch
store.dispatch(
  addPostAction({
    id: 1,
    title: "First post",
  })
);

store.dispatch(
  addPostAction({
    id: 2,
    title: "Second post",
  })
);

store.dispatch(
  removePostAction(1)
);
