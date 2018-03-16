/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  //I: a list of buckets with 2 values repesenting w and h
  //O: a number 
  //C:
  //E: the list is empty
  if (envelopes.length < 1) {
    return 0;
  } else if (envelopes.length === 1) {
    return 1;
  }
  let sortedDoll = envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  let max = 1;
  let dollStacks = [1];
  for (let i = 1; i < sortedDoll.length; i++) {
    let currentMax = 1;
    for (let j = 0; j < i; j++) {
      if (sortedDoll[i][0] > sortedDoll[j][0] && sortedDoll[i][1] > sortedDoll[j][1]) {
        if (currentMax < dollStacks[j] + 1) {
          currentMax = dollStacks[j] + 1;
        }
      } 
    }
    dollStacks[i] = currentMax;
    if (max < currentMax) {
      max = currentMax;
    }
  }
  return max;
};
