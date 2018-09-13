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
  res.render('index', { title: 'Express' });
});


/* GET List of Questions */

router.get('/question', function(req, res, next) {
  res.send(buildRandomQuestion());  
});

/* GET blank */

router.get('/blank', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/blank.html'));
});


/* GET present-exercises */

router.get('/present-exercises', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'present-exercises.html'));
});



router.get('/template-example-1', function(req, res, next) {
  const template = fs.readFileSync(path.join(__dirname, '../view/template.html'), "utf8");
  console.log(template);
  const result = templateEngine(template, 'First title', 'First content');
  res.send(result);
});

router.get('/template-example-2', function(req, res, next) {
  const template = fs.readFileSync(path.join(__dirname, '../view/template.html'), "utf8");
  const result = templateEngine(template, 'Second title', 'Second content');
  res.send(result);
});






module.exports = router;
