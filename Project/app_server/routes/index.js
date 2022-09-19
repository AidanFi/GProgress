var express = require('express');
var router = express.Router();

//require controllers file
var ctrlHome = require('../controllers/home');
var ctrlScores = require('../controllers/scores');
var ctrlOthers = require('../controllers/others');

//

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GProgress' });
});

module.exports = router;
