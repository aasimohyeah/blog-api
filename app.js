const express = require("express");
const path = require("path");
const viewRouter = require("./routes/viewRoutes");

const app = express();

//html page viewing setup
//Set view engine as ejs
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/", viewRouter);

module.exports = app;
