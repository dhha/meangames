const mongoose = require("mongoose");
const gameModel = mongoose.model("Game");

const _updateOne = function(req, res, updateCallback) {
    const id = req.params.id;
    gameModel.findById(id).exec(function(err, game) {
        const response = {status: 204, message: game};
        if(err) {
            response.status = 500;
            response.message = err;
        } else if(!game) {
            response.status = 404;
            response.message = process.env.GAME_NOT_FOUND_MSG;
        }

        if(204 !== response.status) {
            res.status(response.status).json(response.message);
        } else {
            updateCallback(req, game);
            game.save(function(err, updatedGame) {
                const response = {status: 200, message: updatedGame};
                if(err) {
                    response.status = 500;
                    response.message = err;
                }
                res.status(response.status).json(response.message);
            })
        }
    });
};

const GamesController = {
    getAll: function(req, res) {

        let offset = 0;
        let count = 5;
        if(req.query && req.query.offset) {
            offset = req.query.offset;
        }

        if(req.query && req.query.count) {
            count = req.query.count;
        }

        let lat = null;
        let lng = null;
        let maxDistance = 10000;
        let minDistance = 0
        if(req.query && req.query.lat) {
            lat = req.query.lat;
        }

        if(req.query && req.query.lng) {
            lng = req.query.lng;
        }

        if(req.query && req.query.max_distance) {
            maxDistance = req.query.max_distance;
        }
        if(req.query && req.query.min_distance) {
            minDistance = req.query.min_distance;
        }

        let queryString = {};
        if(lat && lng) {
            queryString = {
                "publisher.location.coordinates": {
                    $near: {
                        $geometry: {
                            type: "Point",
                            coordinates: [lat, lng]
                        }, $maxDistance: maxDistance
                    }
                }
            }
        } 

        gameModel.find(queryString).skip(offset).limit(count).exec(function(err, games) {
            res.status(200).json(games);
        });
    },
    getGame: function(req, res) {
        const id = req.params.id;
        gameModel.findById(id).exec(function(err, game) {
            res.status(200).json(game);
        });
    },

    addGame: function(req, res) {
        gameModel.create(req.body, function(err, game) {
            if(err) {
                res.status(500).send(err);
            }
            res.status(200).json({message: "Game added!"});
        });
        
    },

    deleteGame: function(req, res) {
        const id = req.params.id;
        gameModel.findByIdAndDelete(id).exec(function(err, result) {
            if(err) {
                res.status(500).send(err);
            }
            res.status(200).json({message: "Game deleted!"});
        });
    },

    fullUpdate: function(req, res) {
        const fullUpdate = function(req, game) {
            game.title = req.body.title;
            game.year = req.body.year;
            game.rate = req.body.rate;
            game.price = req.body.price;
            game.minPlayer = req.body.minPlayer;
            game.maxPlayer = req.body.maxPlayer;
            game.minAge = req.body.minAge;
        }
        _updateOne(req, res, fullUpdate);
    },

    partialUpdate: function(req, res) {
        const patialUpdate = function(req, game) {
            if(req.body.title) game.title = req.body.title;
            if(req.body.year) game.year = req.body.year;
            if(req.body.rate) game.rate = req.body.rate;
            if(req.body.price) game.price = parseFloat(req.body.price);
            if(req.body.minPlayer) game.minPlayer = req.body.minPlayer;
            if(req.body.maxPlayer) game.maxPlayer = req.body.maxPlayer;
            if(req.body.minAge) game.minAge = req.body.minAge;
        }
        _updateOne(req, res, patialUpdate);
    }
}

module.exports = GamesController