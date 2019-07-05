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
    create: function (tableInput, mood, content, top, bottom, callback) {
        var queryString = "INSERT INTO " + tableInput + "(mood, content, top_text, bottom_text) VALUES ('" + mood + "','" + content + "','" + top + "','" + bottom +"');"
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            callback(res)
            console.log(queryString)
            console.log("ORM Works");
        });
    }
};

// ___________________________________________________________________________________
// Export the orm object for the model (yazzz_model.js).
module.exports = orm;
