const binarySearch = (arr, val) => {
  let high = arr.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = low + Math.floor((high - low)/2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
