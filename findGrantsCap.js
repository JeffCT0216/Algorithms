function findGrantsCap(grantsArray, newBudget) {
  let underBudget = true;
  let numOfGrants = grantsArray.length;
  let avgBudget = newBudget/numOfGrants;
  let i = 0;
  grantsArray.sort((a, b) => a - b);
  while(underBudget && i < grantsArray.length) {
    underBudget = false;  
    if (grantsArray[i] < avgBudget) {
        newBudget -= grantsArray[i];
        numOfGrants --;
        avgBudget = newBudget/numOfGrants;
        i++;
        underBudget = true;
    }  
  }
  return avgBudget;
}
