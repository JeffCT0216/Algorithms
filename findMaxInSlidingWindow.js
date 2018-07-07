function findMaxSlidingWindow(arr, size) {
  let result = [];
  if (arr.length < size) return;
  //finding first max
  let window = [];
  for(let i = 0; i < size; i++) {
    while (window.length > 0 && 
    arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    } 
    window.push(i);
  }
  result.push(arr[window[0]]);
  //sliding the window
  for (let i = size; i < arr.length; i++) {
    if (window.length > 0 
        && window[0] <= i - size) window.shift();
    while (window.length > 0 
        && arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    } 
    window.push(i);
    console.log(window);
    result.push(arr[window[0]]);
  }
  return result;
}
