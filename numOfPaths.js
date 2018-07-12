function numOfPathsToDest(n) {
  if (n === 1) return 1;
  let map = [];
  for (let i = 0; i < n; i++) {
    map[i] = [1];
  }
  for (let i = 0; i < n; i++) {
    map[0][i] = 1;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === i) {
        map[j][i] = Math.max(map[j - 1][i], map[j - 1][i - 1]);
      } else {
        map[j][i] = map[j][i - 1] + map[j - 1][i];
      }
    }
    console.log(map)
  }
  return map[n - 1][n - 1];
}
