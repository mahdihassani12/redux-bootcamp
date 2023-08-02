const { createAction, nanoid, createReducer } = require("@reduxjs/toolkit");

// Initial state
const initialState = {
  count: 0,
};

// action creators
const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
const reset = createAction("RESET");
const incrementBy = createAction("INCREMENT_BY", (amount) => {
  return {
    payload: {
      amount,
    },
  };
});

// reducer
// 1. builder callback notation
// 2. map object notation

// builder callback notation
const counterSlice = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.count += 1;
  });

  builder.addCase(decrement, (state) => {
    state.count -= 1;
  });

  builder.addCase(reset, (state) => {
    state.count = 0;
  });

  builder.addCase(incrementBy, (state, action) => {
    state.count += action.payload.amount;
  });
});

// map object notation
const counterSlice2 = createReducer(initialState, {
  [increment]: (state) => {
    state.count += 1;
  },

  [decrement]: (state) => {
    state.count -= 1;
  },

  [reset]: (state) => {
    state.count = 0;
  },

  [incrementBy]: (state, action) => {
    state.count += action.payload.amount;
  },
});

// store
