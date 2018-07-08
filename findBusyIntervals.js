function findBusyIntervals(arr) {
  let result = [];
  let first = arr[0].first;
  let second = arr[0].second;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].first > first) {
      result.push({first: first, second: second});
      first = arr[i].first;
      second = arr[i].second;
    } else {
      second = arr[i].second;
    }
  }
  return result;
}
