const mongoose = require("mongoose");

const publisherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contry: String,
    establish: Number,
    location: {
        address: String,
        coordinates: {
            type: [Number],
            index: "2dsphere",
        }
    }
});

const gameSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: Number,
    rate: {
        type:Number,
        min: 1,
        max: 5,
        default: 1
    },
    price: Number,
    minPlayer: {
        type:Number,
        min: 1,
        max: 10
    },
    maxPlayer: {
        type:Number,
        min: 1,
        max: 10
    },
    minAge: Number,
    designers: [String],
    publisher: publisherSchema
});

mongoose.model("Game", gameSchema);