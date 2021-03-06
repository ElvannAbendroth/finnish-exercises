var express = require('express');
var router = express.Router();
const Verb = require('../models/Verb');
const Question = require('../models/Question');
const pronouns = require('../models/PronounEnum');
const VerbTableRow = require('../models/VerbTableRow');
var path = require('path');

const fs = require('fs');
const templateEngine = require('../models/templateEngine');

//Wild functions
async function buildRandomQuestion(tense) {
  const verbData = await VerbTableRow.findAll();
  const randomVerbIndex = Math.floor(Math.random() * verbData.length);
  const verb = new Verb(verbData[randomVerbIndex]);
  const randomPronounIndex = Math.floor(Math.random() * pronouns.length);
  const pronoun = pronouns[randomPronounIndex];
  return new Question(verb, tense, pronoun);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  const template = fs.readFileSync(path.join(__dirname, '../view/index.html'), "utf8");
  const result = templateEngine(template, '/', 'Opetellaan Suomea', '', '');
  res.send(result);
});

/* GET List of Questions */
router.get('/question', function(req, res, next) {
  const tense = req.query.tense || 'present';
  if (!['present', 'past', 'conditional'].includes(tense)) {
    res.status(400).send('We do not support tense: ' + tense);
  }
  buildRandomQuestion(tense).then(question => res.send(question));
});


module.exports = router;
