// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput,callback){                                      //runs query on the database (pending which one we are connected to)
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err,res){
            if(err){
                throw err;
            }
            callback(res);
        })
    }
};

// Export the orm object for the model (yazzz_model.js).
module.exports = orm;