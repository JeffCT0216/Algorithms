function reverseWords(arr) {
  let result = [];
  let tail = arr.length - 1;
  while(tail >= 0) {
    let head = findHeadIndex(arr, tail);
    let spaceIndex = head - 1;
    while (head <= tail) {
      result.push(arr[head]);
      head += 1;
    }   
    while (arr[spaceIndex] === ' ') {
      result.push(' ');
      spaceIndex -= 1;
    }
    tail = spaceIndex;
  }
  return result;
}

function findHeadIndex(arr, ind) {
  for (let i = ind; i >= 0; i--) {
    if (i === 0 || arr[i - 1] === " ") return i;
  } 
}
