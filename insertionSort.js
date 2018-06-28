function insertionSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return;
  let temp;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      temp = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
  }
  return arr
}
