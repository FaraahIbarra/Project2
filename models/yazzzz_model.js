//this file is responsible for getting and minipulating the data
//interacts with the mysql DB

//functions that select, inset, update, delete quries here 

var orm = require("../config/orm.js") // requires orm which has the mySQL quiries in it


var meme = { //runs the all quiery on the database
    all: function (callback) {
        orm.all("memes_tb", function (response) { //grabs the table we are going to send to the ORM queries 
            callback(response)
        });
    },
    mood: function (moodClicks, callback) {
        orm.mood("images_tb", "mood", moodClicks, function (response) { //grabs the table we are going to send to the ORM queries 
            callback(response)
        });
    },
    create: function() { // save new memes in the memes_tb database
        orm.create("memes_tb",  function(res) {
            callback(response);
        });
      },
};

// Export the database functions for the controller (yazz_model).
module.exports = meme;

