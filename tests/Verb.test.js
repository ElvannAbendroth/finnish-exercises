const Verb = require('../models/Verb');
const pronouns = require('../models/pronounEnum');
const verbData = require('../models/verbData');

var myVerb = new Verb("rakastaa", "I", "Minä", "present");

test('Verb returns its infinitive', () => {
  expect(myVerb.getInfinitive()).toEqual("rakastaa");
});

test('Verb returns pronoun', () => {
  expect(myVerb.getPronoun()).toEqual("Minä");
});

test('Verb returns tense', () => {
  expect(myVerb.getTense()).toEqual("present");
});

test('Verb returns pronoun index', () => {
  expect(myVerb.getPronounIndex()).toEqual(0);
});

test('Conjugates the Verb according to tense and pronoun', () => {
  expect(new Verb("rakastaa", "I", "Minä", "present").conjugatePresent()).toBe("rakastan");
  expect(new Verb("syödä", "I", "Sinä", "present").conjugatePresent()).toBe("syöt");
});