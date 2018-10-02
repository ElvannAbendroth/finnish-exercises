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
  const template = fs.readFileSync(path.join(__dirname, '../view/template-2.html'), "utf8");
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

/* GET blank */

router.get('/blank', function(req, res, next) {
  const template = fs.readFileSync(path.join(__dirname, '../view/template.html'), "utf8");
  const result = templateEngine(
    template, 
    'blank', 
    'Blank', 
    '', 
    'I\'m a blank file'
  );
  res.send(result);
});

/* GET present-exercises */

router.get('/present-exercises', function(req, res, next) {
  const template = fs.readFileSync(path.join(__dirname, '../view/template.html'), "utf8");
  const content = fs.readFileSync(path.join(__dirname, '../public/content/present-exercises.html'), "utf8");
  const result = templateEngine(
    template, 
    'present-exercises', 
    'Present Exercises', 
    '<script src="js/present-exercises.js"></script>', 
    content
  );
  res.send(result);
});


router.get('/pronouns', function(req, res, next) {
  const template = fs.readFileSync(path.join(__dirname, '../view/template.html'), "utf8");
  const content = fs.readFileSync(path.join(__dirname, '../view/pronouns.html'), "utf8");
  const result = templateEngine(template, 'pronouns', 'Pronouns', '', content);
  res.send(result);
});


/* GET Styles */

/*router.get('/custom-style', function(req, res, next) {
  res.send('../public/stylesheets/style.css');
  //res.sendFile('../public/stylesheets/style.css');
});*/

module.exports = router;
