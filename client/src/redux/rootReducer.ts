import { combineReducers } from "redux";
import { questionReducer } from "./questionReducer";
import { resultReducer } from "./resultReducer";

export const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});
