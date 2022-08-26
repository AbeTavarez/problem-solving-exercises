const wordOccurrence = require("./word-occurrence");

const longPhrase = `She had said I’m tired of begging God to overthrow my son, because all this business of living in the presidential palace is like having the lights on all the time, sir, and she had said it with the same naturalness with which on one national holiday she had made her way through the guard of honor with a basket of empty bottles and reached the presidential limousine that was leading the parade of celebration in an uproar of ovations and martial music and storms of flowers and she shoved the basket through the window and shouted to her son that since you’ll be passing right by take advantage and return these bottles to the store on the corner, poor mother.`

describe('wordOccurrence()', () => {
    test("returns two", () => {
        expect(wordOccurrence('the', 'The quick brown fox jumps over the lazy dog')).toBe(2)
    });
    
    test('test one occurrence', () => {
        expect(wordOccurrence('hello', 'Hello World!')).toBe(1)
    })
    
    test('Word not found', () => {
        expect(wordOccurrence('turtle', 'The quick brown fox jumps over the lazy dog')).toBe(0)
    })
    
    test('Long Phrase', () => {
        expect(wordOccurrence('she', longPhrase)).toBe(4)
    })
})