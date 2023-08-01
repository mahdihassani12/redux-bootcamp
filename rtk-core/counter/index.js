const { createAction } = require("@reduxjs/toolkit")

// Initial state
const initialState = {
  count: 0,
};

// action creators
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
const reset = createAction('RESET');
const incrementBy = createAction('INCREMENT_BY');


// reducer
// store
