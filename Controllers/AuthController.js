const model = require('../models/User')
exports.login = function (req, res) {
    model.findAll({
        limit: 1,
        where: {
            email: req.body.email,
            password: req.body.password,
            type: 'ADMIN'
        }
    }).then(function(result){
        if (result[0]){
            req.session.userId = result[0].id;
            req.session.user = result[0]
            res.redirect('/dashboard')
        }
        else{
            res.redirect('/')
        }
    })
}

exports.dashboard = function(req, res){
    res.render('dashboard');
}
