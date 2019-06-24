require ('dotenv').config();
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var config = require('./config/config');

app.use(express.static(__dirname + '/views')); // you should change this to be wherever your html files are
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

app.route('/').get(function(request, response) {
    response.json(config);
});