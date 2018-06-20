function arrayOfArrayProducts(arr) {
  // your code goes here
  let n = arr.length;
  if (n <= 1) return [];
  let res = [];
  let product = 1;
  for (let i = 0; i < n; i++) {
    res[i] = product;
    product *= arr[i];
  }
  product = 1;
  for (let j = n - 1; j >= 0; j--) {
    res[j] *= product;
    product *= arr[j];
    
  }
  return res;
}
