class Node {
  constructor (data) {
    this.data = data;
    this.left= null;
    this.right = null;
  }
}
class BST {
  constructor () {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.inserNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode (node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        inserNode (node.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode (this.root, data);
  }

  removeNode(node, key) {
    if (node === null) return null;

    if (key < node.data) {
      this.removeNode (node.left, key);
    } else if (key > node.data) {
      this.removeNode (node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let aux = this.findMinNode (node.right);
      node.data = aux.data;
      node.right = this.removeNode (node.right, aux.data);
      return node;
    }
  }

  //Helper Functions

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return findMinNode (node.right);
    }
  }
  getRootNode () {
    return this.root;
  }
  //inorder/preorder/postorder are all DFS
  //left,root,right
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  //root,left,right
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  //left, right, root
  postorder (node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  //BFS
  search(node, data) {
    if (node === null) return null;
    if (data < node.data) {
      return search(node.left, data);
    } else if (data > node.data) {
      return search(node.right, data);
    } else {
      return node;
    }
  }
}
