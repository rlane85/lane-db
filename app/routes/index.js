var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/indexController');

/* GET home page. */
router.get('/token', index_controller.index);

module.exports = router;
