function findBusiestPeriod(data) {
  // your code goes here
  //input: array
  //output: number (timestamp)
  //edgecases: input array length is 0
  let busiestTimestamp;
  let highestHeadcount = 0;
  let currentTimestamp;
  let currentHeadcount = 0;
  //for loop iterate though input data
  for (let i = 0; i < data.length; i++) {  
    //if this timestamp is appearing for the first time
    if (currentTimestamp !== data[i][0]) {
      currentTimestamp = data[i][0]; 
    }
    if (data[i][2] === 1) {
      currentHeadcount += data[i][1];
    } else {
      //exit
      currentHeadcount -= data[i][1];
    }
     //check if next timestamp is not the same
    if (i === data.length - 1 || data[i][0] !== data[i + 1][0]) {
      if (currentHeadcount > highestHeadcount) {
        highestHeadcount = currentHeadcount;
        busiestTimestamp = data[i][0];
      }
    }
  }
  return busiestTimestamp;
}
