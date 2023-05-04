const gamesData = require("../data/games.json");

const GamesController = {
    getAll: function(req, res) {
        console.log("Get all received");
        let offset = 0;
        let count = 5;
        if(req.query && req.query.offset) {
            offset = req.query.offset;
        }

        if(req.query && req.query.count) {
            count = req.query.count;
        }

        res.status(200).json(gamesData.splice(offset, offset + count));
    },
    getGame: function(req, res) {
        const id = req.params.id;
        const game = gamesData.find(game => {
            return game._id.$oid == id;
        });

        res.status(200).json(game);
    },
    getMultiply: function(req, res) {
        const offset = parseInt(req.params.offset);
        let count = 2;
        if(req.query && req.query.count){
            count = parseInt(req.query.count);
        }
        res.status(200).send(offset *  count);
    },
    addGame: function(req, res) {
        console.log("req.body", req.body);
        gamesData.push(req.body);
        res.status(200).json({message: "Game added!"});
    }
}

module.exports = GamesController