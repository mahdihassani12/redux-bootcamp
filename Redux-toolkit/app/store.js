const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("./features/cake/cakeSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

module.exports = store;
