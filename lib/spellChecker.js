const removeNonLetters = (text) => {
    return text.replace(/[^a-zA-Z]/g, "");
};

const spellChecker = (word) => {
    const filteredWord = removeNonLetters(word);
    return filteredWord;
};

export { spellChecker };
