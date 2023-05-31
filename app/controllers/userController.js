var User = require('../models/user');
const { body, validationResult } = require('express-validator');
const { JsonWebToken } = require('jsonwebtoken');

// Display user signup form on GET.
exports.user_signup_get = function(req, res, next) {
    res.render('signup', { title: 'Sign up for Lane Database'});
};

// Handle user signup form on POST
exports.user_signup_post = [

    // validate and sanitize fields
    body('name', 'Name cannot be blank').trim().isLength({min: 1}).escape(),
    body('email', 'Email cannot be blank').trim().isLength({min: 1}).escape(),
    body('password', 'Password cannot be blank').trim().isLength({min: 1}).escape(),
    body('confirmPassword', 'Confirm password cannot be blank').trim().isLength({min: 1}).escape(),

    // save the new user unless it's a duplicate
    (req, res, next) => {
        var errors = validationResult(req).array();
        if (req.body.password != req.body.confirmPassword) {
            errors.push({msg: 'The password and configration passwrod must match'});
        }
        User.findOne({'name': req.body.name}).then(user => {
            if (user) {
                errors.push({msg: 'User already exists.'});
            }
        
            // create an organization object with escaped and trimmed data
            var newUser = new User (
                { name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    isAdministrator: false,
                 });

            // repost if any errors
            if (errors.length != 0) {
                res.render('signup', {
                    title: 'Sign up for Lane Database', 
                    user: newUser,
                    errors:  errors });
            } else {

                // a user with a new name. save it
                newUser.save(function (err) {
                    if (err) { return next (err);}
                    // the user has been created, send the signed json token
                    const token = JsonWebToken.sign ({ name: newUser.name}, SECRET_JWT_CODE);
                    //TODO this is the wrong responder
                    res.json({ success: true, token: token, });
                });
            }
        });
    }
];

// Display user login form on GET.
exports.user_login_get = function(req, res, next) {
    res.render('login', { title: 'Login to Lane Database'});
};

// Handle user login form on POST
exports.user_login_post = [

    // validate and sanitize fields
    body('name', 'Name cannot be blank').trim().isLength({min: 1}).escape(),
    body('password', 'Password cannot be blank').trim().isLength({min: 1}).escape(),

    // check that the user exists and the password matches
    (req, res, next) => {
        User.findOne({'name': req.body.name}).then((user) => {
            if (!user) {
                errors.push({msg: 'Either the user name or password is incorrect'});
            } else {
                if (req.body.password != user.password) 
                    errors.push({msg: 'Either the user name or password is incorrect'});
            }

            if (errors.length != 0) {
                res.render('login', {
                    title: 'Login to Lane Database', 
                    user: user,
                    errors:  errors });

            } else {
                // the user exists and the password matches, send the signed json token
                const token = JsonWebToken.sign ({ name: user.name}, SECRET_JWT_CODE);
                //TODO this is the wrong responder
                res.json({ success: true, token: token, });
            }

        });
    }
];

// Cancel login on GET.
exports.user_cancel_get = function(req, res, next) {

    //TODO this is the wrong responder
    res.json({ success: false, token: null, });
};

