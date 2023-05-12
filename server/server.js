/** @format */

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path')

const routes = require("./routes/expoing.routes");

const app = express();

const port = 4000;

// LOAD ALL STATIC FILES FROM REACT BUILD
app.use(express.static(path.join(__dirname, '../client/build')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan("dev"));

app.use(routes);

app.use(express.json());
app.set("view engine", "pug");

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.listen(port, () => console.log(`Listening in port ${port}...`));
