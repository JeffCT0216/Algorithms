
let printMedians = (arr) => {
  if (arr.length < 1) return [];
  let medians = [arr[0]];
  let sortedStream = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    //insert num
    insertSort(sortedStream, arr[i]);
    //calculate median
    medians.push(findMedian(sortedStream));
  }
  return medians;
}
let insertSort = (arr, num) => {
  let insertIndx = 0;
  let temp;
  while (arr[insertIndx] <= num && insertIndx <= arr.length) {
    insertIndx += 1;
  }
  if (insertIndx === arr.length) {
    arr.push(num);
  } else {
    for (let i = arr.length; i >= insertIndx; i--) {
      if (i === insertIndx) {
        arr[i] = num;
      } else {
        arr[i] = arr[i - 1];
      } 
    }
  }
}
let findMedian = (arr) => {
  if (arr.length < 1) return 0;
  let mid = arr.length / 2;
  if (mid % 1 !== 0) {
    return arr[(mid - 0.5)];
  } else {
    return (arr[mid] + arr[mid - 1]) / 2
  }
}
