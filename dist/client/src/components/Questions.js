"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Questions = void 0;
/* eslint-disable react-hooks/exhaustive-deps */
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
/** Custom Hook */
const FetchQuestion_1 = require("../hooks/FetchQuestion");
const actionTypes_1 = require("../redux/Types/actionTypes");
const Questions = ({ onChecked }) => {
    const [checked, setChecked] = (0, react_1.useState)(undefined);
    const [{ isLoading, serverError }] = (0, FetchQuestion_1.useFetchQestion)();
    const trace = (0, react_redux_1.useSelector)((state) => state.questions.trace);
    const questions = (0, react_redux_1.useSelector)((state) => state.questions.queue[trace]);
    const result = (0, react_redux_1.useSelector)((state) => state.result.result);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch({
            type: actionTypes_1.UPDATE_RESULT_ACTION,
            payload: {
                trace,
                checked,
            },
        });
    }, [checked]);
    function onSelect(i) {
        onChecked(i);
        setChecked(i);
        dispatch({
            type: actionTypes_1.UPDATE_RESULT_ACTION,
            payload: {
                trace,
                checked,
            },
        });
    }
    if (isLoading) {
        return <h3 className="text-light">Loading.....</h3>;
    }
    if (serverError) {
        return (<h3 className="text-light">{serverError || "Unknown Error Occured"}</h3>);
    }
    return (<div className="questions">
      <h2 className="text-light">{questions === null || questions === void 0 ? void 0 : questions.question}</h2>

      <ul key={questions === null || questions === void 0 ? void 0 : questions.id}>
        {questions === null || questions === void 0 ? void 0 : questions.options.map((q, id) => {
            return (<li key={q}>
              <input type="radio" value={checked} name="options" id={`q${id}-option`} onChange={() => onSelect(id)}/>

              <label className="text-primary" htmlFor={`q${id}-option`}>
                {q}
              </label>
              <div className={`check ${result[trace] === id ? "checked" : "null"}`}></div>
            </li>);
        })}
      </ul>
    </div>);
};
exports.Questions = Questions;
//# sourceMappingURL=Questions.js.map