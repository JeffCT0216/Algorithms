const shortestPath = (maze, start, end) => {
  let begin = {
    coord: start,
    dist: 0
  }
  let queue= [];
  queue.push(begin);
  while (queue.length > 0) {
    let current = queue.shift();
    let currentI = current.coord[0];
    let currentJ = current.coord[1];
    if (currentI === end[0] && currentJ === end[1]) {
      return current.dist;
    }
    
    maze[currentI][currentJ] = 2;
    let newCoord;
    if (currentI > 0 && maze[currentI - 1][currentJ] === 1) {
      newCoord = {
        coord: [currentI-1, currentJ],
        dist: current.dist + 1
      }
      queue.push(newCoord);
    }
    if (currentI < maze.length - 1 && maze[currentI + 1][currentJ] === 1) {
      newCoord = {
        coord: [currentI + 1, currentJ],
        dist: current.dist + 1
      }
      queue.push(newCoord);
    }
    if (currentJ > 0 && maze[currentI][currentJ - 1] === 1) {
      newCoord = {
        coord: [currentI, currentJ - 1],
        dist: current.dist + 1
      }
      queue.push(newCoord);
    }
    if (currentJ < maze[0].length - 1 && maze[currentI][currentJ + 1] === 1) {
      newCoord = {
        coord: [currentI, currentJ + 1],
        dist: current.dist + 1
      }
      queue.push(newCoord);
    }
  }
}
