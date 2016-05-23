/*
 * Load required modules
 */
var express = require('express');
var mongoose = require('mongoose');
var app = express();

/*
 * Connect to mongodb
 */
require('./config/database')(mongoose);

/*
 * Perform bootstrapping like defining routes, consuming middlewares
 */

module.exports = app;