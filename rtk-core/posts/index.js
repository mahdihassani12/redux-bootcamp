const {
  createAsyncThunk,
  createSlice,
  configureStore,
} = require("@reduxjs/toolkit");
const axios = require("axios");
const API = "https://jsonplaceholder.typicode.com/posts";

// Initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// action async thunk
const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = axios.get(API);
  return res.data;
});

// slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // handling lifecycle - pending/success/rejected

    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.posts = [];
    });
  },
});

const postsReducer = postsSlice.reducer;

// store
const store = configureStore({
  reducer: postsReducer,
});

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchPosts());
