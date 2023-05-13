const express = require("express");
const router = express.Router();
const path = require("path");
const GamesController = require("./api/controllers/games.controller");
const StudentsController = require("./api/controllers/students.controller");
const usersController = require("./api/controllers/users.contrller");

router.route("/json").get(function(req, res) {
    res.status(200).json({ data: "Json"});
});

router.route("/games").get(GamesController.getAll)
    .post(GamesController.addGame);
    
router.route("/games/:id").get(GamesController.getGame);
// router.route("/games/:offset").get(GamesController.getMultiply);
router.route("/games/:id")
    .delete(GamesController.deleteGame)
    .put(GamesController.fullUpdate)
    .patch(GamesController.partialUpdate);

router.route("/students").get(StudentsController.getAll);
router.route("/students/:studenIndex").get(StudentsController.getIndex)

router.route("/users")
    .post(usersController.addOne);

module.exports = router