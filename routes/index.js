var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sso', function(req, res, next) {
  var json = {"status": 0};
  res.json(json);
});

module.exports = router;
