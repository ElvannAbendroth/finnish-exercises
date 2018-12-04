var express = require('express');
var router = express.Router();
var path = require('path');
const VerbTableRow = require('../models/VerbTableRow');

const fs = require('fs');
const templateEngine = require('../models/templateEngine');

//var VerbTableRow = require('../models/VerbTableRow');
//var Verb = require('../models/Verb');

/* GET list of verbs */
router.get('/', function(req, res, next) {
    const template = fs.readFileSync(path.join(__dirname, '../view/dashboard.html'), "utf8");
    const result = templateEngine(template, '/', 'Dashboard', '', '');
    
    res.send(result);
  });


module.exports = router;