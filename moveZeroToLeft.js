function moveZeroToLeft(arr) {
  let readIndex = arr.length - 1;
  let writeIndex = arr.length - 1;
  while (readIndex >= 0) {
    if (arr[readIndex] !== 0) {
      arr[writeIndex] = arr[readIndex];
      writeIndex -= 1;
    }
    readIndex -= 1;
  }
  while(writeIndex >= 0) {
    arr[writeIndex] = 0;
    writeIndex -= 1;
  }
}
