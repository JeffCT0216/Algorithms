/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let result = 0;
  if (!grid) {
    return result;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        result += 1;
        grid[i][j] = '2';
        convertConnectedLands(grid, i, j);
      }
    }
  }
  return result;
};

var convertConnectedLands = function (grid, i, j) {
  let depth = grid.length;
  let width = grid[i].length;
  if (i > 0) {
    if (grid[i - 1][j] === '1') {
      grid[i - 1][j] = '2';
      convertConnectedLands(grid, i - 1, j);
    }
  }
  if ((j + 1) < width) {
    if (grid[i][j + 1] === '1') {
      grid[i][j + 1] = '2';
      convertConnectedLands(grid, i, j + 1);
    }
  }
  if ((i + 1) < depth) {
    if (grid[i + 1][j] === '1') {
      grid[i+ 1][j] = '2';
      convertConnectedLands(grid, i + 1, j);
    }
  }
  if (j > 0) {
    if (grid[i][j - 1] === '1') {
      grid[i][j -1] = '2';
      convertConnectedLands(grid, i, j - 1);
    }
  }
  return grid;
};
