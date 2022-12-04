var express = require('express');
var router = express.Router();

//require controllers file
var ctrlHome = require('../controllers/home');
var ctrlScores = require('../controllers/scores');
var ctrlOthers = require('../controllers/others');
var ctrlCourses = require('../controllers/courses');

// Home
router.get('/', ctrlHome.index);

// Scores
router.get('/scores', ctrlScores.index);
router.get('/new-score', ctrlScores.newScore)
router.get('/edit-scores', ctrlScores.editScores)
router.get('/statistics', ctrlScores.statistics)
router.get('/leaderboard', ctrlScores.leaderboard)

// Courses
router.get('/courses', ctrlCourses.courses);
router.get('/reviews', ctrlCourses.reviews);
router.get('/add-course', ctrlCourses.addcourse);

// Others
router.get('/others', ctrlOthers.index);

//contact
router.get('/contact-us', ctrlOthers.contact);

router.get('/tutorials', ctrlOthers.tutorials);

//signup / login
router.get('/signup', ctrlOthers.signup);

router.get('/login', ctrlOthers.login);

module.exports = router;

