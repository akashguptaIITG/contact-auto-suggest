import { combineReducers } from "redux";
import contactReducer from "./contact-reducer";

const reducer = combineReducers({
  contact: contactReducer
});

export default reducer;
