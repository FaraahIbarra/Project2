// takes in user input
//process request (get, post, put, delete)
//gets data from the model
//passes data to view

var express = require("express");
var router = express.Router();
// var test = " " 
var meme = require("../models/yazzzz_model.js") //this is requiring function from the yazzz model wich talks to the database

router.get("/", function (req, res) { //server is listening and / ther is a get request
    meme.all(function (data) { //go to the yazz model and use the all function 
        var hbsObject = { //set a varaible for handlebars to creat dynamic content in view 
            meme: data
        };
        // console.log(hbsObject)
        res.render("index", hbsObject); //send the dynamic contennct to the handlebars index view 
    });
});

router.get("/:id", function (req, res) {
    var moodClicks = req.params.id;
    meme.mood(moodClicks, function (data) {
        var hbsObject = {
            meme: data
        };
        
        console.log(hbsObject)
        res.render("template", hbsObject)
    });
    
}); 

// Export routes for server.js to use.s
module.exports = router;
