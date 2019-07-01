// Import MySQL connection.
var connection = require("../config/connection.js");

//This is going to be coverrted to new meme table -- This is our database of user created memes
var orm = {
    all: function (tableInput, callback) { //runs query on the database (pending which one we are connected to)
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        })
    },
    mood: function (tableInput, colToSearch, valOfCol, callback) {
    
        var queryString = "SELECT * FROM " + tableInput + " WHERE " + colToSearch + " = '" + valOfCol + "' ORDER BY RAND() LIMIT 1;"
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        })
    }
};

// Export the orm object for the model (yazzz_model.js).
module.exports = orm;

//__________________NOTES!


// //THIS WORKS!!!!!!!!!
// "SELECT * FROM " + tableInput + "WHERE ? ORDER BY RAND() LIMIT 1" {mood: answer.mo}


// connection.query("SELECT * FROM topSongs WHERE ?", { song: answer.song }, function(err, res) 

// selectWhere: function(tableInput, colToSearch, valOfCol) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//       if (err) throw err;
//       console.log(result);
// });