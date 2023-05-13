const express = require("express");
const router = express.Router();
const GamesController = require("../api/controllers/games.controller");

router.route("/").get(GamesController.getAll)
    .post(GamesController.addGame);
    
router.route("/:id").get(GamesController.getGame);

router.route("/:id")
    .delete(GamesController.deleteGame)
    .put(GamesController.fullUpdate)
    .patch(GamesController.partialUpdate);

module.exports = router