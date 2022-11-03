"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../styles/App.css");
const react_router_dom_1 = require("react-router-dom");
/** Importing Components */
const Main_1 = __importDefault(require("./Main"));
const Result_1 = require("./Result");
const Quiz_1 = __importDefault(require("./Quiz"));
const helper_1 = require("../helper/helper");
/** react routes */
const router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: <Main_1.default />,
    },
    {
        path: "/quiz",
        element: <helper_1.AuthRoute><Quiz_1.default /></helper_1.AuthRoute>
    },
    {
        path: "/result",
        element: <helper_1.AuthRoute><Result_1.Result /></helper_1.AuthRoute>
    },
]);
function App() {
    return (<>
      <react_router_dom_1.RouterProvider router={router}/>
    </>);
}
exports.default = App;
//# sourceMappingURL=App.js.map