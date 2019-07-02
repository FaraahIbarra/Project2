// Import MySQL connection.
var connection = require("../config/connection.js");

// ___________________________________________________________________________________
var orm = {
    all: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + " LIMIT 10;";
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
    },
    create: function () {
        var queryString = "INSERT INTO memes_tb (mood, content) VALUES ('angry','/assets/images/asadmeme1.jpg');"
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

        });
    }
};

// ___________________________________________________________________________________
// Export the orm object for the model (yazzz_model.js).
module.exports = orm;