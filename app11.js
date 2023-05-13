
require("dotenv").config();
require("./api/data/db");

const express = require("express");

const path = require("path");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const serve = app.listen(process.env.PORT, function() {
    console.log("Server is running at port", serve.address().port);
});

// Handle all request
// Move to another route
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use("/api", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,PATCH,GET,POST");
    next();
});

app.use("/api", routes);

app.use(express.static(path.join(__dirname, 'public')));