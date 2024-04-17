var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: '' });
});

/* GET home page ar. */
router.get('/index-ar', function(req, res, next) {
  res.render('index-ar', { title: '' });
});

module.exports = router;
