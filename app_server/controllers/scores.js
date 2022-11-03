module.exports.index = function(req, res){
    res.render('index', { title: 'Scores' });
};

module.exports.newScore = function(req, res){
    res.render('newScore', { title: 'new-score'});
};