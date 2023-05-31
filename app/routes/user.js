var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/userController');

/* GET request for signup */
router.get('/signup', user_controller.user_signup_get);

/* Post request for signup */
router.post('/signup', user_controller.user_signup_post);

/* GET request for login */
router.get('/login', user_controller.user_login_get);

/* Post request for login */
router.post('/login', user_controller.user_login_post);

/* GET request for cancel */
router.get('/cancel', user_controller.user_cancel_get);

module.exports = router;
