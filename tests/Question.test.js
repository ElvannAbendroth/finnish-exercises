const NewVerb = require('../models/NewVerb');
const Question = require('../models/Question');

test('Question example usage', () => {
    const verb = new NewVerb(["rakastaa", "rakastan", "rakastat", "rakastaa", "rakastamme", "rakastatte", "rakastavat", "rakastetaan"]);
    const question = new Question(verb, "present", "me");

    expect(question.getPrompt()).toBe("Infinitive: rakastaa  Pronoun: me \n type answer: ");
    expect(question.getCorrectAnswer()).toBe("rakastamme");
});