function quicksort (arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  let less = [];
  let more = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) less.push(arr[i]);
    if (arr[i] > pivot) more.push(arr[i]);
  }
  return quicksort(less).concat(pivot).concat(quicksort(more));
}
