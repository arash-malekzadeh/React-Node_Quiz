import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionReducer from "./question_reducer";
import resultRducer from "./result_reducer";

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultRducer,
});

export default configureStore({ reducer: rootReducer });
