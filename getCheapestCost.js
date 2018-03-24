function getCheapestCost(rootNode, currentCost = 0) {
  let lowestCost = Infinity;
  let n = rootNode.children.length;
  if (n < 1) {
    return currentCost + rootNode.cost;
  } else {
    for (let i = 0; i < n; i++) {
      let newCost = currentCost +  rootNode.cost;
      let totalCost = getCheapestCost(rootNode.children[i], newCost);
      if (lowestCost > totalCost) lowestCost = totalCost;
    }
  }
  return lowestCost;
}

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}


let root = new Node(1);
[5, 3, 6].forEach(val => {
  root.children.push(new Node(val))
})

for (let i = 0; i < root.children.length; i ++){
  let child = root.children[i];
  if (child.cost === 5) child.children.push(new Node(4))
  if (child.cost === 3){
    child.children.push(new Node(2));
    child.children.push(new Node(0));
  }
  if (child.cost === 6){
    child.children.push(new Node(1));
    child.children.push(new Node(5))
  }
}
let final = root.children.filter(node => node.cost === 3)[0]
let two = final.children[0];
let zero = final.children[1];
two.children.push(new Node(1))
two.children[0].children.push(new Node(1));
zero.children.push(new Node(10))
