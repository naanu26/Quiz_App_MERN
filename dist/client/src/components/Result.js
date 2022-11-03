"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
const react_1 = __importDefault(require("react"));
require("../styles/Result.css");
const react_router_dom_1 = require("react-router-dom");
const actionTypes_1 = require("../redux/Types/actionTypes");
const react_redux_1 = require("react-redux");
const helper_1 = require("../helper/helper");
// import ResultTable from './ResultTable';
const Result = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const { questions: { queue, answers }, result: { result, userId }, } = (0, react_redux_1.useSelector)((state) => state);
    // console.log('ress', result)
    const totalPoints = queue.length * 10;
    const attempts = (0, helper_1.attemptsNumber)(result);
    const earnPoints = (0, helper_1.earnPointsNumber)(result, answers, 10);
    const flag = (0, helper_1.flagResult)(totalPoints, earnPoints);
    console.log("###", totalPoints, attempts, earnPoints, flag);
    function onRestart() {
        console.log("on Restart");
        dispatch({
            type: actionTypes_1.RESET_RESULT_REDUCER,
        });
        dispatch({
            type: actionTypes_1.RESET_QUESTION_REDUCER,
        });
    }
    return (<div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold" style={{ color: '#FF10F0', textTransform: 'uppercase' }}>{userId}</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points : </span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span className="bold" style={flag ? { color: 'green' } : { color: 'red' }}>{flag ? "Passed" : "Failed"}</span>
        </div>
      </div>

      <div className="start">
        <react_router_dom_1.Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </react_router_dom_1.Link>
      </div>
    </div>);
};
exports.Result = Result;
//# sourceMappingURL=Result.js.map