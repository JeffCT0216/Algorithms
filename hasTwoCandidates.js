function hasTwoCandidates(arr, num) {
  if(arr.length < 1 || typeof num !== 'number') return false;
  arr.sort((a, b) => a - b);
  let begin = 0;
  let end = arr.length - 1;
  while(begin < end) {
    console.log(arr, begin, end);
    if (arr[begin] + arr[end] === num) return true;
    else if (arr[begin] + arr[end] > num) end -= 1;
    else begin += 1;
  }
  return false;
}
