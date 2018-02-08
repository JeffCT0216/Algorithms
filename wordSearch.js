/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  //Input: a 2D board and a string
  //Output: boolean of whether the word exists on the board
  let usedIndex = {};
  let result = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        if(checkChars(i, j, 0, word, board)) {
          return true;
        };
      }
    }
  }
  return result;   
};

var checkChars = function(i, j, wordIndex, word, board) {
  let d = board.length;
  let w = board[0].length;
  // console.log(board, wordIndex, wordIndex === word.length);
  if (wordIndex === word.length) {
    // console.log('matched all the words');
    return true;
  }
  if (i < 0 || j >= w || i >= d || j < 0 || board[i][j] !== word[wordIndex] || board[i][j] === '#' || wordIndex === word.length)   {
    return;
  }
  let char = board[i][j];
  board[i][j] = '#';
  if(checkChars(i + 1, j, wordIndex + 1, word, board)) {
    return true;
  };
  if(checkChars(i - 1, j, wordIndex + 1, word, board)) {
    return true;
  };
  if(checkChars(i, j + 1, wordIndex + 1, word, board)) {
    return true;
  };
  if(checkChars(i, j - 1, wordIndex + 1, word, board)) {
    return true
  };
  board[i][j] = char;
  return;
}
