var express = require("express");
var router = express.Router();
var meme = require("../models/yazzzz_model.js")
 
// ___________________________________________________________________________________
router.get("/", function (req, res) { 
    meme.all(function (data) { 
        var hbsObject = { 
            meme: data
        };
        console.log("Home Page Loaded")
        res.render("index", hbsObject); 
    });
});

 // ___________________________________________________________________________________
router.get("/archive", function (req, res) { 
    meme.all(function (data) { 
        var hbsObject = { 
            meme: data
        };
        console.log("Home Page Loaded")
        res.render("archive", hbsObject); 
    });
});

 // ___________________________________________________________________________________
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


router.post("/api/memes", function (req, res) {
    meme.create(["mood", "content","top_text", "bottom_text"],[req.body.mood, req.body.content, req.body.top_text, req.body.bottom_text], 
    function(result) {
        res.json({id: result.insertId });
    });
});

// Export routes for server.js to use.s
module.exports = router;


