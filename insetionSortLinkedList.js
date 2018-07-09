let sortedInsert = function(head, node) {
  if (node === null) return head;
  if (!head || node.data <= head.data) {
    node.next = head;
    return node;
  }
  let curr = head;
  let prev;
  while (curr !== null && curr.data < node.data) {
    prev = curr;
    curr = curr.next;
  }
  if (!prev) {
    node.next = curr;
    return node;
  } else {
    prev.next = node;
    node.next = curr;
  }
  return head;
};

let insertionSort = function(head) {

    let sorted = null;
    let curr = head;

    while (curr) {
        let temp = curr.next;
        sorted = sortedInsert(sorted, curr);
        curr = temp;
    }

    return sorted;
};
