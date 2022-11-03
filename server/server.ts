/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const app = express();
const cors = require("cors");
const { config } = require("dotenv");
import router from "./router/route";

/** connection file */
import connect from "./database/conn";

/** middlewares */
app.use(cors());
app.use(express.json());
config();

/** PORT */
const port = process.env.PORT || 8080;

/** routes */
app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Get Request 1223");
  } catch (error) {
    res.json(error);
  }
});

connect()
  .then(() => {
    try {
      app.listen(8080, () => {
        console.log(`Server listening on port ${port}`);
      });
    } catch (err) {
      console.log("Cannot connect to server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection", error);
  });
