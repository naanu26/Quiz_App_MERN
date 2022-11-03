"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultReducer = void 0;
const actionTypes_1 = require("./Types/actionTypes");
const initialState = {
    userId: null,
    result: [],
};
const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes_1.SET_USER_ID:
            return Object.assign(Object.assign({}, state), { userId: action.payload });
        case actionTypes_1.PUSH_RESULT_ACTION:
            return Object.assign(Object.assign({}, state), { result: [...state.result, action.payload] });
        case actionTypes_1.RESET_RESULT_REDUCER:
            return {
                userId: null,
                result: [],
            };
        case actionTypes_1.UPDATE_RESULT_ACTION:
            const { trace, checked } = action.payload;
            return Object.assign(Object.assign({}, state), { result: state.result.fill(checked, trace, trace + 1) });
        default:
            return state;
    }
};
exports.resultReducer = resultReducer;
//# sourceMappingURL=resultReducer.js.map