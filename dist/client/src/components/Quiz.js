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
const react_1 = __importStar(require("react"));
const Questions_1 = require("./Questions");
/** redux store import */
const react_redux_1 = require("react-redux");
const actionTypes_1 = require("../redux/Types/actionTypes");
const react_router_1 = require("react-router");
const Quiz = () => {
    const { questions: { queue, trace }, result, } = (0, react_redux_1.useSelector)((state) => state);
    const [checked, setChecked] = (0, react_1.useState)(undefined);
    const dispatch = (0, react_redux_1.useDispatch)();
    function onNext() {
        dispatch({
            type: actionTypes_1.MOVE_NEXT_QUESTION,
        });
        if (result.result.length <= trace) {
            // if (checked || checked === 0) {
            dispatch({
                type: actionTypes_1.PUSH_RESULT_ACTION,
                payload: checked,
            });
            // }
        }
        setChecked(undefined);
    }
    function onPrev() {
        dispatch({
            type: actionTypes_1.MOVE_PREV_QUESTION,
        });
    }
    function onChecked(id) {
        setChecked(id);
    }
    /** All questions finished */
    if (trace > 0 && trace === (queue === null || queue === void 0 ? void 0 : queue.length)) {
        return <react_router_1.Navigate to={"/result"} replace></react_router_1.Navigate>;
    }
    return (<div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display questions */}
      <Questions_1.Questions onChecked={onChecked}/>

      <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "3rem",
        }}>
        {trace !== 0 && trace !== queue.length ? (<button className="btn prev" onClick={onPrev}>
            Prev
          </button>) : (<div></div>)}
        {trace !== (queue === null || queue === void 0 ? void 0 : queue.length) ? (<button className="btn next" onClick={onNext}>
            Next
          </button>) : (<div></div>)}
      </div>
    </div>);
};
exports.default = Quiz;
//# sourceMappingURL=Quiz.js.map