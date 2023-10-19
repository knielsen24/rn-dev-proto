const wordList = require("../wordlist.json");

const removeNonLetters = (text) => {
    return text.toLowerCase().replace(/[^a-zA-Z]/g, "");
};

const spellChecker = (query) => {
    const filterWord = removeNonLetters(query);
    const wordSet = new Set(wordList);
    const vowelMap = new Map();
    const regex = /[aeiou]/g;

    wordSet.forEach((word) => {
        const vowelMask = word.replace(regex, "_");
        // c_k_
        if (!vowelMap.has(vowelMask)) {
            vowelMap.set(vowelMask, word);
        }
        // { "c_k_" => "cake" }
    });

    if (wordSet.has(filterWord)) return filterWord;

    const vowel = filterWord.replace(regex, "_");
    if (vowelMap.has(vowel)) return vowelMap.get(vowel);

    return filterWord;
};

export { spellChecker };
