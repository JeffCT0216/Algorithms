function sortKMessedArray(arr, k) {
  for(let i = 0; i < arr.length; i++) {
    let currV = arr[i];
    let j = i - k;
    while(j < i) {
      if (j < 0) {
        j++;
      } else if (arr[j] > arr[i]) {
        for (let k = i; k > j; k--) {
          arr[k] = arr[k - 1];
        }
        arr[j] = currV;
        j = i;
      } else {
        j++;
      }
    }  
  }
  return arr;
}
