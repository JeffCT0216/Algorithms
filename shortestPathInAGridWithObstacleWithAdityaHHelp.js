// Q2 Treasure Island
// You have a map that marks the location of a treasure island. Some of the map area has jagged rocks and dangerous reefs. Other areas are safe to sail in. 
// There are other explorers trying to find the treasure. So you must figure out a shortest route to the treasure island.
// Assume the map area is a two dimensional grid, represented by a matrix of characters.
// You must start from the top-left corner of the map and can move one block up, down, left or right at a time. 
// The treasure island is marked as ‘X’ in a block of the matrix. ‘X’ will not be at the top-left corner. 
// Any block with dangerous rocks or reefs will be marked as ‘D’. You must not enter dangerous blocks. You cannot leave the map area.
// Other areas ‘O’ are safe to sail in. The top-left corner is always safe.
// Output the minimum number of steps to get to the treasure.
// from aonecode.com

// e.g.
// Input
// [
// [‘O’, ‘O’, ‘O’, ‘O’],
// [‘D’, ‘O’, ‘D’, ‘O’],
// [‘O’, ‘O’, ‘O’, ‘O’],
// [‘X’, ‘D’, ‘D’, ‘O’],
// ]

// Output from aonecode.com
// Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps. 
//input nested array
//output is the numbers of steps
//make a copy of an empty nested array
//mark the very first index of the nested array as if we've taken a step There
//check from the original array/ copies to the right to see if it's safe and if the step hasn't been taken
//if not, take the step and mark on the copied array and push step to an recroding array
//check from the original array/ copies to the down to see if it's safe and if the step hasn't been taken 
//if not, take the step and mark on the copied array and push step to an recroding array
//check from the original array/ copies to the left to see if it's safe and if the step hasn't been taken 
//check from the original array/ copies to the up to see if it's safe and if the step hasn't been taken 
//if not, take the step and mark on the copied array and push step to an recroding array
//if no, go back to the last spot in the recording array.
shortestPath([
['O', 'O', 'O', 'O'],
['D', 'O', 'D', 'O'],
['O', 'O', 'O', 'O'],
['X', 'D', 'D', 'O'],
])
function shortestPath (map) {
  let grid = initializeGrid(map);
  grid[0][0] = 1;
  let queue = [[0, 0, 0]];
  let depth = map.length;
  let width = map[0].length;
  while (queue.length > 0) {
    let curr = queue.shift();
    let x = curr[0], y = curr[1];
    console.log(x, y)
    //check right
    if (y < width - 1&& map[x][y + 1] !== "D" && !grid[x][y + 1]) {
      if(map[x][y + 1] === "X") {
        return curr[2] + 1;
      } else {
        queue.push([x, y + 1, curr[2] + 1]);
        grid[x][y + 1] = 1;
      }
    }
    //check down
    if (x < depth - 1 && map[x + 1][y] !== "D" && !grid[x + 1][y]) {
      if(map[x + 1][y] === "X") {
        return curr[2] + 1;
      } else {
        queue.push([x + 1, y, curr[2] + 1]);
        grid[x + 1][y] = 1;
      }
    }
    //check left
    if (y > 0 && map[x][y - 1] !== "D" && !grid[x][y - 1]) {
      if(map[x][y - 1] === "X") {
        return curr[2] + 1;
      } else {
        queue.push([x, y - 1, curr[2] + 1]);
        grid[x][y - 1] = 1;
      }
    }
    //check up
    if (x > 0 && map[x - 1][y] !== "D" && !grid[x - 1][y]) {
      if(map[x - 1][y] === "X") {
        return curr[2] + 1;
      } else {
        queue.push([x - 1, y, curr[2] + 1]);
        grid[x - 1][y] = 1;
      }
    }
  }
  return -1;
}

function initializeGrid (map) {
  let output = [];
  for(i = 0; i < map.length; i++) {
    output.push([]);
  }
  return output;
}
