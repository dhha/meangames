const studentData = require("../data/students.json");

const StudentsController = {
    getAll: function(req, res) {
        let offset = 0;
        let count = 3;

        if(res.query && req.query.offset) {
            offset = req.params.offset;
        }

        if(res.query && req.query.count) {
            count = req.params.count;
        }

        res.status(200).json(studentData.splice(offset, offset + count));
    },
    getIndex: function(req, res) {
        const index = req.params.studenIndex;
        res.status(200).json(studentData[index]);
    }
}

module.exports = StudentsController