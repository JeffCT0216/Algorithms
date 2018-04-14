function findTotalCarrots(board, current, total = 0){
  current = current || findMiddle(board);
  total += current.carrots;
  board[current.depth][current.width] = 0;
  let next = findNext(board, current);
  if(next.carrots === 0) {
    return total;
  } else {
    findTotalCarrots(board, next, total);
  }
}

function findMiddle(board) {
  //find board length (depth)
  let middle = {};
  let depth1 = Math.ceil(board.length / 2) - 1;
  let width1 = Math.ceil(board[0].length / 2) - 1;
  let depth2;
  let width2;
  if (board.length % 2 === 0) {
    depth2 = depth1 + 1;
  }
  if (board[0].length % 2 === 0) {
    width2 = width2 + 1;
  }
  if (!depth2 && !width2) {
    middle[depth] = depth1;
    middle[width] = width1;
    middle[carrots] = board[depth1][width1];
  } else {
    let nearbyCenter = [];
    nearbyCenter.push({depth: depth1, width: width1, carrots: board[depth1][width1]});
    if(!width2) {
      nearbyCenter.push({depth: depth2, width: width1, carrots: board[depth2][width1]}); 
    } else if (!depth2) {
      nearbyCenter.push({depth: depth1, width: width2, carrots: board[depth1][width2]}); 
    } else {
      nearbyCenter.push({depth: depth2, width: width1, carrots: board[depth2][width1]});
      nearbyCenter.push({depth: depth1, width: width2, carrots: board[depth1][width2]});
      nearbyCenter.push({depth: depth2, width: width2, carrots: board[depth2][width2]});
    }
    middle = nearbyCenter.reduce((acc, curr) => {
      return acc.carrots > curr.carrots ? acc : curr;
    });
  }
  return middle;
  
}
function findNext(board, current) {
  let depth = current.depth;
  let width = current.width;
  let next = [];
  //top
  if (width - 1 >= 0) {
    next.push({depth: depth, width: width - 1, carrots: board[depth][width -1]});
  }
  //left
  if (depth - 1 >= 0) {
    next.push({depth: depth - 1, width: width, carrots: board[depth - 1][width]});
  }
  //right
  if (width + 1 < board[0].length) {
    next.push({depth: depth, width: width + 1, carrots: board[depth][width + 1]});
  }
  //bottom
  if (depth + 1 < board.length) {
  next.push({depth: depth + 1, width: width, carrots: board[depth + 1][width]});
  }
  return next.reduce((acc, curr) => {
    return acc.carrots > curr.carrots ? acc : curr;
  });
}
