var express = require('express');
var router = express.Router();
var path = require('path');

//API end point for landing page
var viewPath = __dirname + '/../public/';

var controller = require('./../controller/rep.controller');

router.route('/').get(controller.mConnection);

module.exports = router;