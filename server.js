if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index");
const { default: mongoose } = require("mongoose");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
// every single file will be inside this so that we dont have to duplicate beginning/ end HTML (header, footer)
app.set("layout", "layouts/layout");
app.use(expressLayouts);
// stylesheets, javascript and images will be inside public folder
app.use(express.static("public"));

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.use("/", indexRouter);

// process.env.PORT will pull the port from an environment variable when we deploy into a server
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})