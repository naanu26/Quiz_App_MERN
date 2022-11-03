const express = require("express");
const app = express();
console.log(app);
/** routes */
app.get("/", (req, res) => {
    try {
        res.json("Get Request");
    }
    catch (error) {
        res.json(error);
    }
});
app.listen(8080, () => {
    console.log("Server listening");
});
//# sourceMappingURL=server.js.map