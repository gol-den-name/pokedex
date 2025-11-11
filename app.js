const express = require("express");
const path = require("path");

const app = express();

// Serve main HTML file
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serve CSS
app.get("/style.css", function (req, res) {
  res.sendFile(path.join(__dirname, "style.css"));
});

// Serve JS
app.get("/script.js", function (req, res) {
  res.sendFile(path.join(__dirname, "script.js"));
});

// Start the server
app.listen(3000, function () {
  console.log("Server Initiated at http://localhost:3000");
});
