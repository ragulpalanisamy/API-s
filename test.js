const http = require("http");
const express = require("express");
const app = express();

const port = 5000;

http.createServer((req, res) => {
  console.log(`I Want to seee the request ${req}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
