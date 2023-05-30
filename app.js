const express = require("express");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const path = require("path");


const SERVER_PORT = process.env.PORT || 80;
var SECRET_JWT_CODE = "eyJhbGciOiJIUzUxMiJ9.eyJSb2xlIjoiQWRtaW4i";

const app= express();
app.use(bodyParser.json);
app.set("views", [path.join(__dirname, "views")]);
app.set("view engine", "pug");
app.set("view options", {pretty:true});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// router tables
app.use('/', indexRouter);
app.use('/user', userRouter);

// connect to the database
const mongoose = require("mongoose");

const DATABASE_URL = "mongodb://0.0.0.0/db-server"
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongDB connection error:"));

// set up the listener
const http = require("http");
const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

