const MongoCLient = require("mongodb").MongoClient;

let _connection = null;
const open = function() {
    if( get() == null) {

        MongoCLient.connect(process.env.DB_CONNECTION, function(err, client) {
            if(client) {
                _connection = client.db("meanGames");
                console.log("DB connection open");
            } else {
                console.log("DB connection failed", err);
                return ;  
            }
        });
        
    }
}

const get = function() {
    return _connection;
}

module.exports = {
    open,
    get
}
