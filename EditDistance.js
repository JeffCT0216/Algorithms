/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  if (word1.length === 0 && word2.length === 0) {
    return 0;
  }
  if (word1.length === 0 || word2.length === 0) {
    return word1.length || word2.length;
  }
  if (word1 === word2) {
    return 0;
  }
  let countsBoard = initialize(word2, word1);
  console.log(countsBoard);
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      let a = countsBoard[i][j] || 0;
      let b = countsBoard[i][j + 1] || 0;
      let c = countsBoard[i + 1][j] || 0;
      let min = Math.min(a, b, c);
      if (word1[i] !== word2[j]) {
        min += 1;
      } else if (word1[i] === word2[j]) {
        min = a;
      }
      countsBoard[i + 1][j + 1] = min;
    }
  }
  console.log(countsBoard);
  return countsBoard[word1.length][word2.length];
};

const initialize = (word1, word2) => {
  let countsBoard = [];
  let i = 0;
  while (i < word1.length + 1 || i < word2.length + 1) {
    if (i < word1.length + 1) {
      countsBoard[0] = countsBoard[0] || [];
      countsBoard[0][i] = i;
    }
    if (i < word2.length + 1) {
      countsBoard[i] = countsBoard[i] || [];
      countsBoard[i][0] = i;
    }
    i++;
  } 
  return countsBoard;
}
