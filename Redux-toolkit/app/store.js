const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("./features/cake/cakeSlice");
const icecreamReducer = require("./features/icecream/icecreamSlice");
const usersReducer = require("./users/usersSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: usersReducer,
  },
});

module.exports = store;
