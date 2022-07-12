var express = require("express"),
http = require("http"),
app = express();
app.use(express.static(__dirname + "/client"));
// Creating http server listneing on 3000 powered by express: 
http.createServer(app).listen(3000);
console.log("Listening on port 3000: ");
