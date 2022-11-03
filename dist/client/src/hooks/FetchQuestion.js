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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetchQestion = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const data_1 = __importStar(require("../data/data"));
/** redux actions */
const actionTypes_1 = require("../redux/Types/actionTypes");
/** fetch question hook to fetch api data and set value to store */
const useFetchQestion = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const [getData, setGetData] = (0, react_1.useState)({
        isLoading: false,
        apiData: [],
        serverError: null,
    });
    (0, react_1.useEffect)(() => {
        setGetData((prev) => (Object.assign(Object.assign({}, prev), { isLoading: true })));
        /** async function fetch backend data */
        (() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let question = yield data_1.default;
                if (question.length > 0) {
                    setGetData((prev) => (Object.assign(Object.assign({}, prev), { isLoading: false })));
                    setGetData((prev) => (Object.assign(Object.assign({}, prev), { apiData: { question, answers: data_1.answers } })));
                    /** dispatch an action */
                    dispatch({
                        type: actionTypes_1.START_EXAMINATION,
                        payload: { question, answers: data_1.answers },
                    });
                }
                else {
                    throw new Error("No Question Avalibale");
                }
            }
            catch (error) {
                setGetData((prev) => (Object.assign(Object.assign({}, prev), { isLoading: false })));
                setGetData((prev) => (Object.assign(Object.assign({}, prev), { serverError: error })));
            }
        }))();
    }, [dispatch]);
    return [getData, setGetData];
};
exports.useFetchQestion = useFetchQestion;
// /** MoveAction Dispatch function */
// export const MoveNextQuestion = () => async (dispatch) => {
//     try {
//         dispatch(Action.moveNextAction()); /** increase trace by 1 */
//     } catch (error) {
//         console.log(error)
//     }
// }
// /** PrevAction Dispatch function */
// export const MovePrevQuestion = () => async (dispatch) => {
//     try {
//         dispatch(Action.movePrevAction()); /** decrease trace by 1 */
//     } catch (error) {
//         console.log(error)
//     }
// }
//# sourceMappingURL=FetchQuestion.js.map