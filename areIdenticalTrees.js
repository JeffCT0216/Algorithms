const areIdenticalTrees = (root1, roo2) => {
  if (!root1 && !root2) {
    return true;
  }
  if (root1 && root2) {
    return (root1.val === root2.val && 
      areIdenticalTrees(root1.left, root2.left) &&
      areIdenticalTrees(root1.right, root2.right));
  }
  return false;
}
