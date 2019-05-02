import { combineReducers } from "redux";
import { ADD_FRIEND } from "./types";

const INITIAL_STATE = {
  current: [],
  possible: ["Harshit", "Hardik", "Harshil"]
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      const { current, possible } = state;

      const addedFriend = possible.splice(action.payload, 1);
      current.push(addedFriend);
      const newState = { current, possible };
      return newState;

    default:
      return state;
  }
};

export default combineReducers({
  friends: friendReducer
});
