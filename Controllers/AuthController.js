const model = require('../models/User')
const querystring = require('querystring'); 

exports.login = function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const errorResponse = { message: 'Invalid Credentials' }
    
    model.findAll({
        limit: 1,
        where: {
            email: email,
            password: password,
            type: 'ADMIN'
        }
    }).then(function(result){
        if (result[0]){
            req.session.userId = result[0].id;
            req.session.user = result[0]
            res.redirect('/admin')
        }
        else{
            var qs = querystring.stringify(errorResponse);
            res.redirect('/?message=Invalid Credentials');
        }
    })
}



exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    })
}