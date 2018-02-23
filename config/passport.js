const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

module.exports = function (passport) {
    passport.use('local-signup', new LocalStrategy({
        usernameField:'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, callback) {
        User.findOne({ 'local.email': email } function(err, user) {
            if (err) return callback(err);

            if (user) {
                return callback(null, false, req.flash('signupMessage', 'Email is taken!! Try again! <img src="https://imgflip.com/i/256e1e"/>'))
            } else {
                let newUser = new User()
                newUser.local.email = email
                newUser.local.password = newUser.encrypt(password);

                newUser.save(function(err) {
                    if (err) throw err
                    return callback(null, newUser)
                })
            }
        })
    }));
}