function findArrayQuadruplet(arr, s) {
  // your code goes here
  let l = arr.length;
  if (l < 4) return [];
  arr.sort((a, b) => a - b);
  for (var i = 0; i < l - 3; i++) {
    for (var j = i + 1; j < l - 2; j++) {
      let r = s - (arr[i] + arr[j]);
      let third = j + 1, fourth = l - 1;
      while (third < fourth) {
        if (arr[third] + arr[fourth] > r) {
          fourth -= 1;
        } else if (arr[third] + arr[fourth] < r) {
          third += 1;
        } else {
          return [arr[i], arr[j], arr[third], arr[fourth]];
        }
      }
    }
  }
  return [];
}
