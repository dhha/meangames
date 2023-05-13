const  mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userModel = mongoose.model(process.env.DB_USER_MODEL);

const usersController = {
    addOne: function(req, res) {
        const salt = bcrypt.genSaltSync(10);

        const response = {
            status: 201, 
            message: ""
        };

        if(req.body) {
            const newUser = {
                name: req.body.name,
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password, salt)
            };

            userModel.create(newUser, function(err, data) {
                if(err) {

                } else {

                }
            });
        } else {
            //Send message to user
        }
    },
    getOne: function(req, res) {

    }
}

module.exports = usersController;