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
const increment_By_Amount_Action = (amount = 1) => {
  return {
    type: "INCREASE_BY_AMOUNT",
    payload: amount,
  };
};

// reducers
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: initialState.count,
    };
  } else if (action.type === "INCREASE_BY_AMOUNT") {
    return {
      count: state.count + action.payload,
    };
  }
};

// store
const store = createStore(counterReducer);
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
store.dispatch(increment_By_Amount_Action());
store.dispatch(increment_By_Amount_Action(10));
