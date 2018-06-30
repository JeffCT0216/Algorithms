var firstMissingPositive = function(nums) {
  let i = 0;
  while (i < nums.length) {
    let temp = nums[i];
    if (nums[i] > 0 && nums[i] !== i && nums[temp] !== temp) { 
      if (nums[temp] !== undefined) {  
        nums[i] = nums[temp];
      } 
      nums[temp] = temp;    
    } else {
      i++;
    }
  } 
  for (let j = 1; j <= nums.length + 1;j++) {
    if (nums[j] !== j) return j;
  }    
};
