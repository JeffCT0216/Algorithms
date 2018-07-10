let inorderInterative = (root) => {
  if (!root) return;
  let stk = [];
  while(stk.length > 0 || root) {
    if(root) {
      stk.push(root);
      root = root.left;
    } else {
      console.log(stk[stk.length - 1].data + ', ');
      root = stk.pop().right;
    }
  }
}
