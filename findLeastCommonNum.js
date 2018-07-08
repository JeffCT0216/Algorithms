function findLeastCommonNum(a1, a2, a3) {
  let [i, j, k] = [0, 0, 0];
  while (i < a1.length && j < a2.length && k < a3.length) {
    let [a, b, c] = [a1[i], a2[j], a3[k]];
    if (a === b && b === c) return a1[i];
    if (a > b || j > b) j++;
    if (a > c|| b > c)  k++;
    if (b > a || c > a)  i++;  
  }
  return - 1;
}
