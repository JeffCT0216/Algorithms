function findDuplicates(arr1, arr2) {
  // your code goes here
  let result = [];
  let l1 = arr1.length;
  let l2 = arr2.length;
  let temp;
  if (l2 >= l1 * 2) {
    var j = l1;
    while(!arr2.includes(arr1[j]) && j >= 0) {
      j -= 1;
      if (arr2.indexOf(arr1[j]) >= 0) {
        temp = arr2.slice(0, arr2.indexOf(arr1[j]) + 1);
      }
    }
    if(!temp) return result;
  }
  temp = temp || arr2; 
  for (var i = 0; i < arr1.length; i++) {
    if (temp.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
