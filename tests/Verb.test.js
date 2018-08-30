const Verb = require('../models/Verb');

var myVerb = new Verb("rakastaa", "I");

test('Verb returns infinitive', () => {
  expect(myVerb.getInfinitive()).toBe("rakastaa");
});

test('Conjugation returns type', () => {
  expect(myVerb.getType()).toBe("I");
});