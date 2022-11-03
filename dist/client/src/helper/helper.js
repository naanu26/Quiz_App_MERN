"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = exports.flagResult = exports.earnPointsNumber = exports.attemptsNumber = void 0;
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const attemptsNumber = (result) => {
    return result.filter((r) => r !== undefined).length;
};
exports.attemptsNumber = attemptsNumber;
const earnPointsNumber = (result, answers, point) => {
    return result
        .map((ele, i) => answers[i] == ele)
        .filter((i) => i)
        .map((i) => point)
        .reduce((acc, curr) => acc + curr, 0);
};
exports.earnPointsNumber = earnPointsNumber;
const flagResult = (totalPoints, earnPoints) => {
    return (totalPoints * 50) / 100 < earnPoints;
};
exports.flagResult = flagResult;
const AuthRoute = ({ children }) => {
    const auth = (0, react_redux_1.useSelector)((state) => state.result.userId);
    return auth ? children : <react_router_1.Navigate to={'/'} replace></react_router_1.Navigate>;
};
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=helper.js.map