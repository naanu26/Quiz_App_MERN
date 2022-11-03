import {
  SET_USER_ID,
  PUSH_RESULT_ACTION,
  RESET_RESULT_REDUCER,
  UPDATE_RESULT_ACTION,
} from "./Types/actionTypes";

interface ResultReducerState {
  userId: any;
  result: Array<any>;
}

const initialState: ResultReducerState = {
  userId: null,
  result: [],
};

export const resultReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case PUSH_RESULT_ACTION:
      return {
        ...state,
        result: [...state.result, action.payload],
      };
    case RESET_RESULT_REDUCER:
      return {
        userId: null,
        result: [],
      };
    case UPDATE_RESULT_ACTION:
      const { trace, checked } = action.payload;
      return {
        ...state,
        result: state.result.fill(checked, trace, trace + 1),
      };
    default:
      return state;
  }
};
