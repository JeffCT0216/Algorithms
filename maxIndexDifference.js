let maxIndexDifference = (arr) => {
  let minIndx = 0;
  let maxIndxDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[minIndx] > arr[i]) {
      minIndx = i;
    } else {
      maxIndxDiff = Math.max(i - minIndx, maxIndxDiff);
    }
  }
  return maxIndxDiff;
}
