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

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));


// load the db models and sync
const db = require("./app/models");
//TODO when in production, drop the sync arguments
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// pug view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set('view engine', 'pug');
// app.set('vew options', {pretty: true});

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to lane_db application"});
// });
// router tables
const indexRouter = require("./app/routes/index");
// const userRouter = require("./app/routes/user");
// app.use("/", indexRouter);
// app.use("/user", userRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404, 'Page not found: ' + req.url ));
// });
  
// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


// set up the listener
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});
