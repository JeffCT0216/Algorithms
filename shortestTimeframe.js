const transactions = [100, 300, 100, 'A', 0, 600, 200];

//if each index is equivilent to one month
//shortest time to reach 1000 would be 3

function shortestTimeframe (trans, amount) {
  //input: Array, Number
  //output: number
  //edge case: amount too large, NAN, null 
  if (isNaN(amount) || !Array.isArray(trans)) return undefined;
  let total = 0;
  let start = 0;
  let timeframe = Infinity;
  for (let i = 0; i < trans.length; i++) {
    let currAmount = isNaN(trans[i]) ? 0 : trans[i];
    if (currAmount >= amount) {
      return 1;
    }
    
    total += currAmount;
    while (total >= amount && start < i) {
      let currTimeframe = i - start + 1;
      timeframe = (timeframe > currTimeframe) ? currTimeframe : timeframe;
      let startAmount = isNaN(trans[start]) ? 0 : trans[start];
      total -= startAmount;
      start += 1;
      // console.log('total and start in while loop', total, start, i);
    }
  }
  return timeframe;
}
console.log(shortestTimeframe(transactions, 1000) === 5);
console.log(shortestTimeframe(transactions, 1) === 1);
console.log(shortestTimeframe(transactions, 'A') === undefined);
console.log(shortestTimeframe(null, 100) === undefined);
console.log(shortestTimeframe(transactions, 10000) === Infinity);
