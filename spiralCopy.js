function spiralCopy(inputMatrix) {
  // your code goes here
  let result = [];
  let maxHorIndex = inputMatrix[0].length;
  let maxVerIndex = inputMatrix.length;
  let totalNumCount = maxHorIndex * maxVerIndex;
  let minHor = 0;
  let minVer = 0;
  while (result.length !== totalNumCount) {
    result.push(inputMatrix[minVer][minHor]);
    //going towards right
    for (let i = minHor + 1; i < maxHorIndex; i++) {
      result.push(inputMatrix[minVer][i]);
    }
    //going down
    for (let j = minVer + 1; j < maxVerIndex; j++) {
        result.push(inputMatrix[j][maxHorIndex - 1]);
    }
    if (result.length !== totalNumCount) {  
      //going left
      for (let k = maxHorIndex - 2; k >= minHor; k--) {
        result.push(inputMatrix[maxVerIndex - 1][k]);
      }
      //going up
      for (let l = maxVerIndex - 2; l > minVer; l--) {
        result.push(inputMatrix[l][minHor]);
      } 
    }  
    minHor += 1;
    minVer += 1;
    maxHorIndex -= 1;
    maxVerIndex -= 1;
  }
  return result;
}
