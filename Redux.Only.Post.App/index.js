const { createStore, combineReducers } = require("redux");

// Initial state
const initialState = {
  posts: [],
};

const initialUsersState = {
  users: []
}

// constants
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

// actions - action creators
const addPostAction = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const removePostAction = (id) => {
  return {
    type: REMOVE_POST,
    payload: id,
  };
};

const removeUserAction = (id) => {
  return {
    type: REMOVE_USER,
    payload: id,
  };
};

// reducer
const postReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    return {
      posts: [...state.posts, action.payload],
    };
  } else if (action.type === REMOVE_POST) {
    return {
      posts: state.posts.filter((post) => {
        return post.id !== action.payload;
      }),
    };
  } else {
    return state;
  }
};

const userReducer = (state = initialUsersState, action) => {
  if (action.type === ADD_USER) {
    return {
      users: [...state.users, action.payload],
    };
  } else if (action.type === REMOVE_USER) {
    return {
      users: state.users.filter((user) => {
        return user.id !== action.payload;
      }),
    };
  } else {
    return state;
  }
};

// store
const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer
});
const store = createStore(rootReducer);

store.subscribe(() => {
  const data = store.getState();
  console.log("Posts ", data.posts);
  console.log("Users ", data.users);
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
  addUserAction({
    id: 1,
    name: "Mahdi Hassani",
  })
);

store.dispatch(
  removePostAction(1)
);
