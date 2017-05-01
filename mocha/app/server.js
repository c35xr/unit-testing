var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var login = require("./login");

// parse Content-Type application/json
app.use(bodyParser.json({
  limit: '10mb'
}));

app.post("/login", function(req, res){
	var response = login.singin(req.body.email, req.body.password);
	res.send(response);
});

app.post("/register", function(req, res){
	var response = login.singup(req.body.name, req.body.email, req.body.password);
	res.send(response);
});

app.listen(3000);