function isMatch(text, pattern, tPointer = 0, pPointer = 0) {
  if (tPointer === text.length) return true;
  if (pPointer === pattern.length) return false;
  while (pPointer < pattern.length) {
    if (pattern[pPointer] === text[tPointer] || pattern[pPointer] === '.') {
      return isMatch(text, pattern, tPointer += 1, pPointer +=1);
    } else {
      if (pattern[pPointer] === '*') {
        if (pattern[pPointer - 1] === text[tPointer] || pattern[pPointer - 1] === '.') {
          return isMatch(text, pattern, tPointer += 1, pPointer);
        } else {
          return isMatch(text, pattern, tPointer, pPointer += 1);
        }
      } else {
        if (pattern[pPointer + 1] === '*' ) {
          return isMatch(text, pattern, tPointer, pPointer += 2);
        }
      }
    }
    pPointer += 1;
  }
}
