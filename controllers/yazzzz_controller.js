var express = require("express");
var router = express.Router();
var meme = require("../models/yazzzz_model.js")


router.get("/", function (req, res) {
    res.render("index")
    console.log("Home Page Loaded")
});


// ___________________________________________________________________________________
// router.get("/api/memes", function (req, res) {
//     meme.all(function (data) {
//         var hbsObject = {
//             meme: data
//         };
//         res.render("archive", hbsObject);
//         console.log("API Loaded")
//     });
// });

// ___________________________________________________________________________________
router.get("/archive", function (req, res) {
    meme.all(function (data) {
        var hbsObject = {
            meme: data
        };
        console.log("Archive Loaded")
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

// ___________________________________________________________________________________
router.post("/api/memes", function (req, res) {
    meme.create([req.body.mood], [req.body.content], [req.body.top_text], [req.body.bottom_text], function (result) {
        res.json({
            id: result.insertId
        });
    });
});

// router.get("/api/memes", function(req, res) {
//     return res.json(res);
//   });

// Export routes for server.js to use.s
module.exports = router;