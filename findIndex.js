function findLowestIndex(arr, n) {
  let [low, high] = [0, arr.length - 1];
  while(low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === n && (mid === 0 || arr[mid - 1] !== n)) return mid;
    if (arr[mid] === n || arr[mid] > n) high = mid - 1;
    if (arr[mid] < n) high = mid - 1;
    console.log(low, high);
  }
  return -1
}
function findHighestIndex(arr, n) {
  let [low, high] = [0, arr.length - 1];
  while(low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === n && (mid === 0 || arr[mid + 1] !== n)) return mid;
    if (arr[mid] === n || arr[mid] < n) low = mid + 1;
    if (arr[mid] > n) high = mid - 1;
    console.log(low, high);
  }
  return -1; 
}
