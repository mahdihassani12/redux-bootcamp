const { createSlice, configureStore } = require("@reduxjs/toolkit");

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    reset: (state, action) => {
      state.count = 0;
    },
    incrementBy: (state, action) => {
      state.count += action.payload;
    },
  },
});

const { increment, incrementBy, decrement, reset } = counterSlice.actions;
const counterReducer = counterSlice.reducer;
const store = configureStore({
  reducer: counterReducer,
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(incrementBy(200));
console.log(store.getState());