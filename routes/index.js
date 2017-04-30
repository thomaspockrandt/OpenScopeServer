var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sso', function(req, res, next) {
  res.render('json', { json: {"status": 0} });
});

module.exports = router;
