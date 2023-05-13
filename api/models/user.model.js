const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
    }, 
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model(process.env.DB_USER_MODEL, userSchema);