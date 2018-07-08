function findMaxSubArrSum(arr) {
  let [maxCurrSum, maxGlobalSum] = [arr[0], arr[0]];
  for (let i = 1; i < arr.length; i++) {
    maxCurrSum = Math.max(arr[i], maxCurrSum + arr[i]);
    console.log(maxCurrSum, arr[i]);
    if (maxCurrSum > maxGlobalSum) maxGlobalSum = maxCurrSum;
  } 
  return maxGlobalSum;
}
