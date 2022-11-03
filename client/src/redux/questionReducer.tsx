import {
  START_EXAMINATION,
  MOVE_NEXT_QUESTION,
  MOVE_PREV_QUESTION,
  RESET_QUESTION_REDUCER,
} from "./Types/actionTypes";

const initialState = {
  queue: [],
  answers: [],
  trace: 0,
};

export const questionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case START_EXAMINATION:
      return {
        ...state,
        queue: action.payload.questions,
        answers: action.payload.answers,
      };

    case MOVE_NEXT_QUESTION:
      return {
        ...state,
        trace: state.trace + 1,
      };

    case MOVE_PREV_QUESTION:
      return {
        ...state,
        trace: state.trace - 1,
      };

    case RESET_QUESTION_REDUCER:
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    default:
      return state;
  }
};
