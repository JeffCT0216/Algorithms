// Given a binary tree, find the subtree with maximum average. Return the root of the subtree.
// Example Given a binary tree:


//        2 ​ 
//      /   \ 
//   -2       14 
//   / \      / \ 
// -1  1     5  -1
// return the node 14.
let test = {
  val: 2,
  left: {
    val: -2,
    left: {
      val: -1
    },
    right: {
      val: 1
    },
  },
  right: {
    val: 14,
    left: {
      val: 5
    },
    right: {
      val: -1
    }
  }
}
maxAvgSubTree(test);
function maxAvgSubTree (root) {
  if (!root.left) return root.right;
  if (!root.right) return root.left;
  let leftTally = DFSTally(root.left, [0, 0]);
  let rightTally = DFSTally(root.right, [0, 0]);
  console.log(leftTally, rightTally);
  return leftTally[0] / leftTally[1] > rightTally[0] / rightTally[1] ? root.left : root.right;
  
}

function DFSTally (node, tally) {
  let s = [node];
  while (s.length > 0) {
    let tmp = s.pop();
    tally[0] += tmp.val;
    tally[1] += 1;
    if(tmp.left) s.push(tmp.left);
    if(tmp.right) s.push(tmp.right);
  }
  return tally;
}
