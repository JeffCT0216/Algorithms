function shortestWordEditPath(source, target, words) {
	/**
	@param source: string
	@param target: string
	@param words: string[]
	@return: integer
	*/
  let counter = {};
  let queue = [source];
  let visited = new Set();
  counter[source] = 0;
  let curr;
  while (queue.length > 0) {
    curr = queue.shift();
    for (let i = 0; i < words.length; i++) {
      if (!visited.has(words[i])) {
        if (compare(curr, words[i])) {
          if (words[i] === target) return counter[curr] + 1;
          queue.push(words[i]);
          visited.add(words[i]); 
          counter[words[i]] = counter[curr] + 1;
        }
      }
    }
  }
  return -1;
}

function compare(word1, word2) {
  let counter = 0;
  let longest = word1.length > word2.length ? word1.length : word2.length;
  let lengthDiff = Math.abs(word1.length - word2.length);
  if (lengthDiff > 1) return false;
  for (let i = 0; i < longest; i++) {
    if (word1[i] !== word2[i]) counter++;
  }
  return counter === 1;
}
