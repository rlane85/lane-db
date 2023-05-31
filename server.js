const express = require("express");
const cors = require("cors");
const path = require("path");
var corsOptions = { origin:"http://localhost:8081"}

const app= express();
app.use(cors(corsOptions));

// parse requests of content-type - applicaiton/json
app.use(express.json());

// parse requesets of content type - applicaiton/x-www-for-urlencoded
app.use(express.urlencoded({ extended: true }));

// load the db models and sync
const db = require("./app/models");
//TODO when in production, drop the sync arguments
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to lane_db application"});
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// set up the listener
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});
