// Word Occurrence
// Write an algorithm that counts the amount times a word is found in the phrase.
// @word - string
// @phrase - string
module.exports = (word, phrase) => {
    // Start coding below this line
    let count = 0
    let arr = phrase.split(' ')
    for (let i = 0; i < arr.length; i++){
        if (word.toLowerCase() === arr[i].toLowerCase()) {
            count++
        }
    }
    return count
}