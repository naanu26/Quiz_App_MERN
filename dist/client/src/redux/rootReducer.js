"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
const redux_1 = require("redux");
const questionReducer_1 = require("./questionReducer");
const resultReducer_1 = require("./resultReducer");
exports.rootReducer = (0, redux_1.combineReducers)({
    questions: questionReducer_1.questionReducer,
    result: resultReducer_1.resultReducer
});
//# sourceMappingURL=rootReducer.js.map