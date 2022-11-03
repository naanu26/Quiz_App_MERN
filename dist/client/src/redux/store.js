"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const redux_logger_1 = __importDefault(require("redux-logger"));
const rootReducer_1 = require("./rootReducer");
const toolkit_1 = require("@reduxjs/toolkit");
const store = (0, toolkit_1.configureStore)({
    reducer: rootReducer_1.rootReducer,
    middleware: [redux_thunk_1.default, redux_logger_1.default],
});
exports.default = store;
//# sourceMappingURL=store.js.map