BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  let currSmallest = null;
  let currNode = this.root;
  if (inputNode.right !== null) {
    currSmallest = inputNode.right
    while (currSmallest.left !== null) currSmallest = currSmallest.left;
  } else {
    while(currNode !== null) {
      if (currNode.key > inputNode.key) {
        currSmallest = currNode;
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
    }
  }  
  }
  return currSmallest;
}
