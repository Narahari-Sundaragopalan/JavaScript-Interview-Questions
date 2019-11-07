/**
 * Amazon is partnering with the linguistics department at a local university to analyze important works of English literature and identify patterns in word usage across different eras. To ensure a cleaner output. the linguistics department has provided a list of commonly used words (e.g., “an”, “the”. etc.) to exclude from the analysis. In the context of this search, a word is an alphabetic sequence of characters having no whitespace or punctuation.

Write an algorithm to find the most frequently used word in the text excluding the commonly used words.

Input:
The input to the function/method consists of two arguments:
literatureText: a string representing the block of text,
wordsToExclude: a list of strings representing the commonly used words to be excluded while analyzing the word frequency.

Output:
Return a list of strings representing the most frequently used word in the text or in case of a tie, all of the most frequently used words in the text..

Note:
Words that have a different case are counted as the same word. The order of words does not matter in the output list. All words in the ‘wordsToExclude’ list are unique. Punctuation should be treated as white space.

Example
Input :
literature Text = “Jack and Jill went to the market to buy bread and cheese. Cheese is Jack’s and Jill’s favorite food.”
wordsToExclude = [“and”, “he”, “the”, “to”, “is”. “Jack”, “Jill”]
Output :
[“cheese”, “s”]
 */

const commonWords = (literatureText, wordsToExclude) => {
    const re = /\s|\’/;
    const wordsArray = literatureText.replace('.', '').split(re);
    const wordCountMap = {};
    let mostCommonWords = [];
    let maxFrequency = 0;

    // ignore case for all elements and convert excluded words to lower case 
    wordsToExclude = wordsToExclude.map(word => word.toLowerCase());
    // create a map, for words and their frequency
    for (let word of wordsArray) {
        word = word.toLowerCase();
        wordCountMap[word] = wordCountMap[word] + 1 || 1;
    }

    for (let word in wordCountMap) {
        if (!wordsToExclude.includes(word)) {
            if (wordCountMap[word] > maxFrequency) {
                maxFrequency = wordCountMap[word];
                mostCommonWords = [word];
            } else if (wordCountMap[word] === maxFrequency) {
                mostCommonWords.push(word);
            }
        }
    }

    return mostCommonWords;
}






/********************* */
var mostCommonWord = function(paragraph, banned) {
    const re = /[\s\'!?,;.]+/;
    const wordsArray = paragraph.replace('.', '').split(re);
    const wordCountMap = {};
    let mostCommonWords = '';
    let maxFrequency = 0;
    
    banned = banned.map(bannedWord => bannedWord.toLowerCase());
    
    for (let word of wordsArray) {
        word = word.toLowerCase();
        wordCountMap[word] = wordCountMap[word] + 1 || 1;
    }
    
    
    for (let word in wordCountMap) {
        if (!banned.includes(word)) {
            if (wordCountMap[word] > maxFrequency) {
                maxFrequency = wordCountMap[word];
                mostCommonWords = word;
            }
        }
    }
    
    return mostCommonWords;
};

/************************ */
var mostCommonWord = function(paragraph, banned) {
    const re = /[\s\'!?,;.]+/;
    const wordsArray = paragraph.replace('.', '').split(re);
    const wordCountMap = {};
    let mostCommonWords = '';
    let maxFrequency = 0;
    
    banned = banned.map(bannedWord => bannedWord.toLowerCase());
    
    for (let word of wordsArray) {
        word = word.toLowerCase();
        if (banned.includes(word)) {
            continue;
        }
        wordCountMap[word] = wordCountMap[word] + 1 || 1;
        if (wordCountMap[word] > maxFrequency) {
            maxFrequency = wordCountMap[word];
            mostCommonWords = word;
        }

    }
    
    return mostCommonWords;
};