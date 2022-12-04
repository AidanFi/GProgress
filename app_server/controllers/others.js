module.exports.index = function(req, res){
    res.render('index', { title: 'Others' });
};

//***Contact Page***
module.exports.contact = function(req, res){
    res.render('contact', { title: 'Contact'});
};

module.exports.tutorials = function(req, res){
    res.render('tutorials', { title: 'Tutorials'});
};

module.exports.signup = function(req, res){
    res.render('signup', { title: 'Signup'});
};

module.exports.login = function(req, res){
    res.render('login', { title: 'Login'});
};

