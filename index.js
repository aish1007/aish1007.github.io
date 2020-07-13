var express = require("express");
var app = express();
var path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
app.use(express.static("dist/"));
// app.use("/js", express.static(path.join(__dirname, "public/js/")));
// console.log(_dirname);
app.listen(3000);
