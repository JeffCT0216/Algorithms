function bracketMatch(text) {
  let pairs = 0, openB = 0, i = 0;
  while(i < text.length) {
    if (openB === 0) {
      if (text.charAt(i) === ')') {
        i++;
      } else {
        let n = findOpenB(text, i);
        openB = n - i + 1;
        i = n + 1;
      }   
    } else if (openB > 0) {
      if (text.charAt(i) === '(') {
        openB += 1;
      } else if (text.charAt(i) === ')'){
        pairs += 1;
        openB -= 1;
      } 
      i++;
    }
  }
  return text.length - pairs * 2;
}
        
function findOpenB(text, i) {
  for (i += 1; i < text.length; i++) {
    if (text.charAt(i) !== '(') return i - 1;
  } 
  return i;
}
