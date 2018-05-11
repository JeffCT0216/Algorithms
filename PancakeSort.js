function pancakeSort(arr) {
  let largestInd;
  let numOfUnsorted = arr.length;
  while (numOfUnsorted > 1) {
    largestInd = findLargestIndex(arr, numOfUnsorted);
    if (largestInd !== numOfUnsorted - 1) {
      if (largestInd !== 0) flip(arr, largestInd);
      flip(arr, numOfUnsorted - 1);
    }
    numOfUnsorted -= 1;  
  }
  return arr;
}


function flip(arr, k) {
  let startingPoint = 0;
  while (startingPoint < k) {
    let top = arr[startingPoint];
    arr[startingPoint] = arr[k];
    arr[k] = top;
    startingPoint += 1;
    k -= 1;
  }
}

function findLargestIndex(arr, ind) {
  let result = 0;
  for (let j = 0; j < ind; j++) {
    if (arr[j] > arr[result]) result = j;
  }
  return result;
}
