// ===== Palindrome
// A Palindrome is a word, phrase, or sequence that reads the same backward as forward, 
// e.g., "madam" or "nurses run".
// Write an algorithm that checks if the input is a palindrome.
// @input: String - the word or phrase to check if is palindrome
// @Expected output: Boolean - You should return true if the word or phrase is palindrome or false is it's not.

module.exports = (input) => {
    // Start coding below this line
    let reversedStr = '';
    // clean the data: make it all lowercase and remove spaces
    let newInput = input.toLowerCase().replace(/\s/g, '');

    for (let i = newInput.length -1; i >= 0; i--){
        reversedStr += newInput[i]
    }

    return reversedStr === newInput;
}

