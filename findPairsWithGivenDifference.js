function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  let difference = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    difference[arr[i] - k] = arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    if (difference[arr[j]] !== undefined) { 
      result.push([difference[arr[j]], arr[j]]);
    }
  }
  return result;
}
