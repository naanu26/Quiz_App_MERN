"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionReducer = void 0;
const actionTypes_1 = require("./Types/actionTypes");
const initialState = {
    queue: [],
    answers: [],
    trace: 0,
};
const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes_1.START_EXAMINATION:
            return Object.assign(Object.assign({}, state), { queue: action.payload.question, answers: action.payload.answers });
        case actionTypes_1.MOVE_NEXT_QUESTION:
            return Object.assign(Object.assign({}, state), { trace: state.trace + 1 });
        case actionTypes_1.MOVE_PREV_QUESTION:
            return Object.assign(Object.assign({}, state), { trace: state.trace - 1 });
        case actionTypes_1.RESET_QUESTION_REDUCER:
            return {
                queue: [],
                answers: [],
                trace: 0,
            };
        default:
            return state;
    }
};
exports.questionReducer = questionReducer;
//# sourceMappingURL=questionReducer.js.map