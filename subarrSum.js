let subarrSum = (arr, sum) => {
  let start = 0;
  let end = 1;
  let currSum = arr[0] > sum ? 0 : arr[0];
  if (currSum === sum) return [1, 1];
  for (end; end < arr.length; end ++) {
    currSum += arr[end];
    while (currSum > sum) {
      currSum -= arr[start];
      start += 1;
    }
    if (currSum === sum) return [start + 1, end + 1];
  }
  return -1;
}
