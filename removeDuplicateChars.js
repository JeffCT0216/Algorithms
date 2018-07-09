let removeDuplicateChars = (str) => {
  let set = new Set();
  let i = 0;
  while(i < str.length) {
    let char = str.charAt(i); 
    if (set.has(char)) {
      str = str.slice(0, i) + str.slice(i + 1, str.length);
    } else {
      set.add(char);
      i++;
    }
  }
  return str;
}
