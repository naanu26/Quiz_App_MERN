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
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const actionTypes_1 = require("../redux/Types/actionTypes");
require("../styles/Main.css");
function Main() {
    const inputRef = react_1.default.createRef();
    const [error, setError] = (0, react_1.useState)(false);
    const [inputValue, setInputValue] = (0, react_1.useState)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const onChangeHandler = () => {
        var _a;
        setInputValue((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.value);
        setError(false);
    };
    const startQuiz = () => {
        if (inputValue) {
            dispatch({
                type: actionTypes_1.SET_USER_ID,
                payload: inputValue,
            });
        }
        if (!inputValue) {
            setError(true);
        }
    };
    return (<div className="container">
      <h1 className="title text-light">Digiaccel Learning Quiz System</h1>

      <ol>
        <h3>Rules for the Quiz:</h3>
        <li>You will be asked 10 questions one after another.</li>
        <li>
          Scores will be calculated on basis of correct and incorrect answers.
        </li>
        <li>
          Each question has four choices. You can choose only one options.
        </li>
        <li>You can change the answer before submission.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form id="form" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
        <input ref={inputRef} className="userid" type="text" placeholder="Username" required onChange={onChangeHandler}/>
        {error && (<div style={{ color: "wheat", marginTop: "10px" }}>
            Please add the UserName
          </div>)}
      </form>

      <div className="start" onClick={startQuiz}>
        <react_router_dom_1.Link className="btn" to={(inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) ? "quiz" : "/"}>
          Start Quiz
        </react_router_dom_1.Link>
      </div>
    </div>);
}
exports.default = Main;
//# sourceMappingURL=Main.js.map