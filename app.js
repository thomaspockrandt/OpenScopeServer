var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('OpenScopeServer');
});

app.get('sso', function(req, res) {
  // TODO: add single sign on for Office 365
});

app.get('/document/:uid', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var json = {
      "comments_count": 3
    };
    res.send(JSON.stringify(json);
});

app.get('/document/:uid/status', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var json = {
      "status": 1
    };
    res.send(JSON.stringify(json);
});

app.get('/document/:uid/comments', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var json = [
      {
        "user": 12345,
        "comment": "This looks interesting.",
        "point": {"x": 2234, "y": 5431}
      }, {
        "user": 54321,
        "comment": "What do you think?",
        "point": {"x": 8564, "y": 4322}
      }, {
        "user": 3213,
        "comment": "What do you think?",
        "point": {"x": 12542, "y": 54231}
      }
    ];
    res.send(JSON.stringify(json);
});

var port = process.env.port || 3000;
app.listen(port, function () {
  console.log("OpenScopeServer listening on port " + port);
});