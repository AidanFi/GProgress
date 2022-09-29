var express = require('express');
var router = express.Router();

//require controllers file
var ctrlHome = require('../controllers/home');
var ctrlScores = require('../controllers/scores');
var ctrlOthers = require('../controllers/others');
var ctrlCourses = require('../controllers/courses')

// Home
router.get('/', ctrlHome.index);
module.exports = router;

// Scores
router.get('/scores', ctrlScores.index);
module.exports = router;

// Courses
router.get('/courses', ctrlCourses.index);
module.exports = router;


// Others
router.get('/others', ctrlOthers.index);
module.exports = router;

