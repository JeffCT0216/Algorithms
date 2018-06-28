function bubbleSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return;
  let unsorted = arr.length;
  let swap = true;
  while(swap) {
    swap = false;
    for (i = 0; i < unsorted; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
    unsorted -= 1;
  }
  return arr;
}
