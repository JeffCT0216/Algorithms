function shiftedArrSearch(shiftArr, num) {
  let pivot = findPivotPoint(shiftArr);
  console.log('pivot', pivot)
  if (num === shiftArr[pivot]) return pivot;
  if (num < shiftArr[0] || pivot === 0) return binarySearch(shiftArr, pivot, shiftArr.length, num);
  return binarySearch(shiftArr, 0, pivot, num);
}

function findPivotPoint(arr) {
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    console.log(start, mid, end);
    //if current value is smaller than  previous
    if (mid === 0 || arr[mid] < arr[mid - 1]) return mid;
    //if current value is greater
    if (arr[mid] < arr[0]) end = mid - 1;
    else start = mid + 1;
  }
  return 0;
}

function binarySearch(arr, start, end, num) {
  while(start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === num) return mid;
    if (arr[mid] > num) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}
