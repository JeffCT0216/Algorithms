function indexEqualsValueSearch(arr) {
  let start = 0;
  let end = arr.length - 1;
  while(start <= end) {
    let i = Math.floor(end - start);
    if (arr[i] < i) {
      start = i + 1;
    } else if (arr[i] === i && (i === 0 || arr[i - 1] !== i - 1)) {
      return i;
    } else {
      end = i - 1;
    }
    
  }
  return -1;
}
