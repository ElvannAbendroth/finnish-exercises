var express = require('express');
var router = express.Router();
const NewVerb = require('../models/Verb');
const Question = require('../models/Question');
const pronouns = require('../models/PronounEnum');
const verbsPresent = require('../models/verbData');

//Wild functions
function buildRandomQuestion() {
  const randomVerbIndex = Math.floor(Math.random() * verbsPresent.length);
  const verb = new NewVerb(verbsPresent[randomVerbIndex]);
  const randomPronounIndex = Math.floor(Math.random() * pronouns.length);
  const pronoun = pronouns[randomPronounIndex];
  return new Question(verb, "present", pronoun);
}

function buildRandomExercise(amount) {
  var i;
  var array = [];
  for (i = 0; i < amount; i++) { 
      var randomVerb = buildRandomQuestion();
      array.push(randomVerb);
  }
  return array;
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET List of Questions */

router.get('/listofquestions', function(req, res, next) {
  const numberOfExercises = 4;
  const verbExercises = buildRandomExercise(numberOfExercises);
  
  res.send(verbExercises);
  
});








module.exports = router;
