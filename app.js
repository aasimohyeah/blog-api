const express = require("express");
const path = require("path");
const viewRouter = require("./routes/viewRoutes");

const app = express();

//HTML page viewing SETUP
//Set view engine as ejs
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//morgan returns info regarding the type of request made, error code etc.
//eg : GET /api/.. 404 500ms
const morgan = require("morgan"); //http logger midleware

app.use("/", viewRouter);

module.exports = app;
