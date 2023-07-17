// Steps
const { createStore } = require("redux");

// Initial states

const initialState = {
  count: 0,
};

// actions -- actions, actions creators

// increment action creator
const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};

// decrement action creator
const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};

// reset action creator
const resetAction = () => {
  return {
    type: "RESET",
  };
};

// increment by amount action creator
const increment_By_Amount_Action = () => {
  return {
    type: "INCREASE_BY_AMOUNT",
  };
};

// reducers
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }
};

// store
const store = createStore(counterReducer);
const stateData = store.getState();
