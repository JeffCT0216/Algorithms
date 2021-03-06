function wordCountEngine(document) {
  let wordArr = document.split(' ');
  let result = [];
  let count = {};
  let order = 0;
  let wordOrder = {};
  for (let i = 0; i < wordArr.length; i++) {
    let current = wordArr[i].replace(/[^\w]/g, '').toLowerCase();
    if (!count[current] && current !== '') {
      count[current] = 1;
      result.push([current]);
      order += 1;
      wordOrder[current] = order;
    } else {
      count[current] += 1;
    }
  }
  for (let j = 0; j < result.length; j++) {
    result[j][1] = `${count[result[j]]}`;
  }          
  return sorting(result, wordOrder);
}

function sorting(arr, wordOrder) {
  return arr.sort(function(a, b) {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else {
      return wordOrder[a[0]] - wordOrder[b[0]];
    } 
  });
}
