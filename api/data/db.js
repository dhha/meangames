const mongoose = require("mongoose");
require("../models");
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on("connected", function() {
    console.log("Mongoose connected to", process.env.DB_NAME);
});

//connected
//disconnected
//error

process.on("SIGINT", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose close");
        process.exit(0);
    });
})


process.on("SIGUSR2", function() {
    mongoose.connection.close(function() {
        console.log("Mongoose restart");
        process.kill(process.pid, "SIGUSR2");
    });
})