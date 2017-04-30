var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OpenScopeServer' });
});

router.get('sso', function(req, res, next) {
  // TODO: add single sign on for Office 365
});

router.get('/document/:uid', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var json = {
      "comments_count": 3
    };
    res.send(JSON.stringify(json);
});

router.get('/document/:uid/status', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    var json = {
      "status": 1
    };
    res.send(JSON.stringify(json);
});

router.get('/document/:uid/comments', function(req, res, next) {
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

module.exports = router;
