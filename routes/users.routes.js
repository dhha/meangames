
const express = require("express");
const usersController = require("../api/controllers/users.contrller");
const router = express.Router();

router.route("/")
    .post(usersController.addOne);

module.exports = router