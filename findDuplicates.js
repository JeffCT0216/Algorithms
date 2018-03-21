function findDuplicates(arr1, arr2) {
  // your code goes here
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i += 1;
      j += 1;
    } else if (arr1[i] < arr2[j]) {
      i += 1;
    } else {
      j += 1;
    }  
  }
  return result;
}
