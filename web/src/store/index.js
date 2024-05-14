import { createStore } from "redux";

const defaultState = {
  theme: "light",
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
