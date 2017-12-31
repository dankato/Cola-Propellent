const express = require("express");
const morgan = require("morgan");
const app = express();
const livereload = require("livereload");
const server = livereload.createServer();

server.watch(".");

app.use(morgan("combined"));
app.use(require("connect-livereload")({ port: 35729 }));
app.use(require("./backend/controllers/MainController"));

app.listen(3000, function() {
  console.log("listening on port 3000");
});
