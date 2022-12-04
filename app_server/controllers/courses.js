module.exports.courses = function(req, res){
    res.render('courses', { title: 'Courses'});
};

module.exports.reviews = function(req, res){
    res.render('reviews', { title: 'Reviews'});
};

module.exports.addcourse = function(req, res){
    res.render('addcourse', { title: 'Add Course'});
};