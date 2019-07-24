function shortestWordEditPath(source, target, words) {
	/**
	@param source: string
	@param target: string
	@param words: string[]
	@return: integer
	*/
  if (source.length !== target.length) return -1;
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
  if (word1.length !== word2.length) return -1;
  let counter = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) counter++;
    if (counter > 1) return -1;
  }
  return true;
}
