import {createStore} from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = {...store};
  if (action.type === "INCREMENT") {
    newStore.counter = store.counter + 1;
  } else if (action.type === "DECREMENT") {
    newStore.counter = store.counter - 1;
  } else if (action.type === "ADDITION") {
    let updatedValue = parseInt(store.counter) + parseInt(action.payload.number);
    newStore.counter = updatedValue;
  } else if (action.type === "SUBTRACTION") {
    return {...store, counter: store.counter - Number(action.payload.number)}
  }
  else if (action.type === "PRIVACY_TOGGLE") {
    return {...store, privacy: !store.privacy}
  }
  return newStore;
}

const counterStore = createStore(counterReducer);

export default counterStore;