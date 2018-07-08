function flipArr(arr, begin, end) {
  while(begin < end) {
    let temp = arr[begin];
    arr[begin] = arr[end];
    arr[end] = temp;
    begin += 1;
    end -= 1;
  }
}

function rotateArr(arr, n) {
  let end = arr.length - 1;
  if (n === 0) return arr;
  flipArr(arr, 0, end);
  n = n % arr.length;
  if (n > 0) {
    flipArr(arr, 0, n - 1);
    flipArr(arr, n, end);
  } else {
    flipArr(arr, end + (n + 1), end);
    flipArr(arr, 0, end + n);
  }
}
