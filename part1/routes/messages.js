var express = require('express');
var router = express.Router();
var db = require('../db');

var CURRENT_BUYER_ID = 11;
var CURRENT_SELLER_ID = 12;

router.get