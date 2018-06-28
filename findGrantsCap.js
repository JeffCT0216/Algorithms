function findGrantsCap(grantsArray, newBudget) {
  // your code goes here
  let underBudget = true;
  let numOfGrants = grantsArray.length;
  let avgBudget = newBudget/numOfGrants;
  grantsArray.sort((a, b) => a - b);
  while(underBudget && grantsArray.length > 1) {
    underBudget = false;  
    if (grantsArray[0] < avgBudget) {
        newBudget -= grantsArray[0];
        grantsArray = grantsArray.slice(1);
        avgBudget = newBudget/grantsArray.length;
        underBudget = true;
    }  
  }
  return avgBudget;
}
