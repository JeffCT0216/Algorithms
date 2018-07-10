let isBST = (root, min = -Infinity, max = Infinity) => {
  if (!root) return true;
  if (root.data < min || root.data > max) return false;
  return (isBST(root.left, min, root.data) 
          && isBST(root.right, root.data, max));
}
