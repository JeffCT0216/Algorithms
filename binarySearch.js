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

function bsRec(arr, n, begin, end) {
begin = begin === undefined ? 0 : begin;
end = end === undefined ? arr.length -  1 : end;
if(arr.length < 1 || begin > end) return -1;
let mid = begin + Math.floor((end - begin)/ 2);
if(arr[mid] === n) return mid;
if(arr[mid] > n) return bsRec(arr, n, begin, mid - 1);
if(arr[mid] < n) return bsRec(arr, n, mid + 1, end);
}

function bsIte(arr, n) {
  let begin = 0;
  let end = arr.length - 1;
  while(begin <= end) {
    let mid = begin + Math.floor((end - begin) / 2);
    if (arr[mid] === n) return mid;
    if (arr[mid] > n) end = mid - 1;
    if (arr[mid] < n) begin = mid + 1;
  }
  return - 1;
}
