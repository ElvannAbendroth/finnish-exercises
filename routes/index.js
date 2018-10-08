var express = require('express');
var router = express.Router();
const Verb = require('../models/Verb');
const Question = require('../models/Question');
const pronouns = require('../models/PronounEnum');
const verbsPresent = require('../models/verbData');
var path = require('path');

const fs = require('fs');
const templateEngine = require('../models/templateEngine');

//Wild functions
function buildRandomQuestion() {
  const randomVerbIndex = Math.floor(Math.random() * verbsPresent.length);
  const verb = new Verb(verbsPresent[randomVerbIndex]);
  const randomPronounIndex = Math.floor(Math.random() * pronouns.length);
  const pronoun = pronouns[randomPronounIndex];
  return new Question(verb, "present", pronoun);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  const template = fs.readFileSync(path.join(__dirname, '../view/present.html'), "utf8");
  const result = templateEngine(
    template, 
    '/', 
    'Index', 
    '', 
    'I\'m the index'
  );
  res.send(result);
});

/* GET List of Questions */

router.get('/question', function(req, res, next) {
  res.send(buildRandomQuestion());  
});


module.exports = router;
