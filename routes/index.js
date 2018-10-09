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
function buildRandomQuestion(tense) {
  const randomVerbIndex = Math.floor(Math.random() * verbsPresent.length);
  const verb = new Verb(verbsPresent[randomVerbIndex]);
  const randomPronounIndex = Math.floor(Math.random() * pronouns.length);
  const pronoun = pronouns[randomPronounIndex];
  return new Question(verb, tense, pronoun);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  const template = fs.readFileSync(path.join(__dirname, '../view/present.html'), "utf8");
  const result = templateEngine(template, '/', 'Opetellaan Suomea', '', '');
  res.send(result);
});

/* GET List of Questions */
router.get('/question', function(req, res, next) {
  const tense = req.query.tense || 'present';
  if (!['present', 'past'].includes(tense)) {
    res.status(400).send('We do not support tense: ' + tense);
  }
  res.send(buildRandomQuestion(tense));  
});


module.exports = router;
