let inorderSuccessor = (root, d) => {
  let curr = null;
  while (root) {
    if (root.data > d) {
      curr = root;
      root = root.left;
    } else {
      root = root.right;
    }
  }
 return curr;
}
