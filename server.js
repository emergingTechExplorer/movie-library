const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
// every single file will be inside this so that we dont have to duplicate beginning/ end HTML (header, footer)
app.set('layout', 'layouts/layout');
// stylesheets, javascript and images will be inside public folder
app.set(express.static("public"));

app.use("/", indexRouter);

// process.env.PORT will pull the port from an environment variable when we deploy into a server
app.listen(process.env.PORT || 3000);
