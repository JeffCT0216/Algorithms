function drawLine(x1, y1, x2, y2) {
  //pretend this function draw lines;
  //taking all the cordinates
    //draw line between (x1, y1) and (x2, y2);
  console.log(x1, y1, x2, y2);
}

console.log('Practice makes Perfect!');  

function drawHTree(x, y, length, depth) {
  //x, y cordinates, length interger, depth an integer
  if (depth === 0) {
    return;
  }
  let newLength = Math.pow(length, 0.5);
  //first horizontal coordinates
  let x1 = x - length/2;
  let y1 = y + length/2;
  let x2 = x + length/2;
  let y2 = y - length/2;
  drawLine(x1, y, x2, y);
  //left vertical coordinates
  drawLine(x1, y1, x1,y2);
  drawHTree(x1, y1, newLength, depth - 1);
  drawHTree(x1, y2, newLength, depth - 1);  
  //right vertical coordinates
  drawLine(x2, y1, x2, y2);
  drawHTree(x2, y1, newLength, depth - 1);
  drawHTree(x2, y2, newLength, depth - 1);     
};
