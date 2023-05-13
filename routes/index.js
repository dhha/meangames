const express = require("express");
const router = express.Router();

const gameRoutes = require("./games.routes");
const userRoutes = require("./users.routes")

router.route("/json").get(function(req, res) {
    res.status(200).json({ data: "Json"});
});

router.use("/games", gameRoutes)
router.use("/users", userRoutes)

module.exports = router