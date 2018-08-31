const NewVerb = require('../models/Verb');

test('NewVerb example', () => {
    const example = new NewVerb(["rakastaa", "rakastan", "rakastat", "rakastaa", "rakastamme", "rakastatte", "rakastavat", "rakastetaan"]);
    expect(example.getConjugation("present", "me")).toBe("rakastamme");
});