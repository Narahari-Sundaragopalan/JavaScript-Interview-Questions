// In a file there are 1 million words . Find n most frequent words in that file.

function countFrequency(str, n) {
  let words = str.split(/\s+/);

  var countMap = words.reduce((wordMap, word) => {
    if (word) {
      wordMap[word] = wordMap[word] + 1 || 1;
    }
    return wordMap;
  }, {});

  let sortedMap = Object.keys(countMap).sort((a, b) => {
    return countMap[b] - countMap[a];
  });

  return sortedMap.slice(0, n).join('\n');
}
