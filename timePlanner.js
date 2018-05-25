function meetingPlanner(slotsA, slotsB, dur) {
  let i = 0;
  let j = 0; 
  while(i < slotsA.length && j < slotsB.length) {
    let startingTime;
    let endingTime;
    if (slotsA[i][0] >= slotsB[j][1]) {
      j++;
    } else if (slotsB[j][0] >= slotsA[i][1]) {
      i++;
    } else {
      startingTime = Math.max(slotsA[i][0], slotsB[j][0]);
      endingTime = startingTime + dur;
      if (endingTime <= slotsA[i][1] && endingTime <= slotsB[j][1]) {
        return [startingTime, endingTime];
      }
      if (j < slotsB.length - 1 && slotsA[i][1] > slotsB[j + 1][0]) {
        j++;
      } else if (i < slotsA.length - 1 && slotsB[j][1] > slotsA[i + 1][0]) {
        i++;
      } else {
        i++;
        j++;
      }
    }
  }
  return [];
}
