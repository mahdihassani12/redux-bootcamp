const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require("axios");

initialState = {
  loading: false,
  users: [],
  error: null,
};

const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((user) => user.id));
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.users = [];
    });
  },
});

module.exports = usersSlice.reducer;
module.exports.fetchUsers = fetchUsers;
