function rps(n) {
  if (n === 0) return [];
  let hands = ['r', 'p', 's'];
  let result = [];
  let pre = rps(n - 1);
  if (n === 1) return hands; 
  hands.forEach((ele) => {
    pre.forEach((val)=> {
      result.push([ele].concat(val));
    })
  })
  return result;
}
