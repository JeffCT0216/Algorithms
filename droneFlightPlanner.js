function calcDroneMinEnergy(route) {
  // your code goes here
  let highest;
  let result;
  if (route.length === 1) return 0;
  for (let i = 0; i < route.length; i++) {
    if(highest === undefined || highest < route[i][2]) highest = route[i][2];
  }
  return  highest - route[0][2];
}
