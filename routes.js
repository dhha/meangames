const express = require("express");
const router = express.Router();
const path = require("path");
const GamesController = require("./controllers/games.controller");
const StudentsController = require("./controllers/students.controller");

router.route("/json").get(function(req, res) {
    res.status(200).json({ data: "Json"});
});

router.route("/games").get(GamesController.getAll)
    .post(GamesController.addGame);
    
// router.route("/games/:id").get(GamesController.getGame);
router.route("/games/:offset").get(GamesController.getMultiply);

router.route("/students").get(StudentsController.getAll);
router.route("/students/:studenIndex").get(StudentsController.getIndex)

module.exports = router