var express = require('express');
var router = express.Router();

//require controllers file
var ctrlHome = require('../controllers/home');
var ctrlScores = require('../controllers/scores');
var ctrlOthers = require('../controllers/others');
var ctrlCourses = require('../controllers/courses');
var ctrlContact = require('../controllers/others');
var ctrlTutorials = require('../controllers/others')

// Home
router.get('/', ctrlHome.index);

// Scores
router.get('/scores', ctrlScores.index);

// Courses
router.get('/courses', ctrlCourses.index);

// Others
router.get('/others', ctrlOthers.index);

//contact
router.get('/contact', ctrlContact.contact);

router.get('/tutorials', ctrlTutorials.tutorials);

module.exports = router;

