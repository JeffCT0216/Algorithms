let findSingleNums = (arr) => {
  let count = numCount(arr);
  let result = [];
  for (let key in count) {
    if (count[key] % 2 !== 0) {
      result.push(Number(key));
    }
  }
  return [Math.min(result[0], result[1]), Math.max(result[0], result[1])];
}
let numCount = (arr) => {
  let count = {};
  arr.forEach((ele) => {
    count[ele] = count[ele] === undefined ?  1 : count[ele] += 1;
  })
  return count;
}
