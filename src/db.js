"use strict";
exports.__esModule = true;
var knex = require("knex");
var config = require("../knexfile");
exports.db = knex(config.development);
