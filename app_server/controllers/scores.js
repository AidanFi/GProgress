module.exports.index = function(req, res){
    res.render('index', { title: 'Scores' });
};

module.exports.newScore = function(req, res){
    res.render('newScore', { title: 'new-score'});
};

module.exports.editScores = function(req, res){
    res.render('editScores', { title: 'edit-scores'});
};

module.exports.statistics = function(req, res){
    res.render('statistics', { title: 'statistics'});
};

module.exports.leaderboard = function(req, res){
    res.render('leaderboard', { title: 'leaderboard'});
};