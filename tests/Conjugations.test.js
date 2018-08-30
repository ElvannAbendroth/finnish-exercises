const Verb = require('../models/Verb');
const Conjugation = require('../models/Conjugation');
const pronouns = require('../models/PronounEnum');
const verbData = require('../models/verbData');

var myConjugatedVerb = new Conjugation(new Verb("rakastaa", "I"), "Minä", "present");

test('Conjugation return pronoun', () => {
  expect(myConjugatedVerb.getPronoun()).toEqual("Minä");
});

test('Conjugation return tense', () => {
  expect(myConjugatedVerb.getTense()).toEqual("present");
});

test('Conjugation return pronoun index', () => {
  expect(myConjugatedVerb.getPronounIndex()).toEqual(0);
});

test('Conjugates the verb according to tense and pronoun', () => {
  expect(new Conjugation(new Verb("rakastaa", "I"), "Minä", "present").conjugatePresent()).toBe("rakastan");
  expect(new Conjugation(new Verb("syödä", "I"), "Sinä", "present").conjugatePresent()).toBe("syöt");
});