// import { wordlist } from "./wordList";

const wordlist = require("../wordlist.json");

const vowels = ["a", "e", "i", "o", "u"];

const removeNonLetters = (text) => {
    return text.toLowerCase().replace(/[^a-zA-Z]/g, "");
};

const vowelsReplace = (word) => {};

const wordMatch = (word) => {
    return wordlist.includes(word);
};

const spellChecker = (word) => {
    const match = wordMatch(word);
    if (match) {
        return word;
    }
};

export { spellChecker, removeNonLetters };

/**
 * ? spellChecker Function:
 * * after removing non letters, need to check if the word is a match
 * * if it is a match, return the word
 * * if it is not a match, run the vowelsReplace function
 * * vowelsReplace will replace the vowels and check if the word is a match
 * * this needs to iterate through the vowelsReplace function until the word is a match
 * * need to check the length of the word to determine how many times to iterate through the vowelsReplace function
 * ! There is a limitation with this design.  If there is no match after the vowel change, the function will not find a match. Will need a edge case function/condition to handle this.
 */

// ? wordMatch Function:
// * Simple includes method to check if the word is in the wordlist

// ? removeNonLetters Function:
// * Added import for this function to Home/index.js
// * remove punctuation and spaces
// * Correction: remove non letters and change regex to only include letters
// * added toLowerCase (wordMatch was not working properly without this)
