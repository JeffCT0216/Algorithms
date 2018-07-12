function decrypt(word) {
  let lowest = 97;
  let result = '';
  let mutiply = 0;
  if (word.length < 1) return result;
  let currTotal = word.charCodeAt(0);
  result += String.fromCharCode(currTotal - 1); 
  for (let i = 1; i < word.length; i++) {
    lowest = currTotal + 97;
    let currNum = word.charCodeAt(i) + 26 * mutiply;
    while (currNum < lowest) {
      currNum += 26;
      mutiply += 1;
    }
    result += String.fromCharCode(currNum - currTotal);
    currTotal = currNum;
  }
  return result;
}

