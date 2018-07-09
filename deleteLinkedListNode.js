let deleteNode = function(head, key) {
    let curr = head;
    let prev;
  if (!curr) return head;
  while(curr !== null) {
    if (curr.data === key) {
      if (curr === head) {
        head = head.next;
        curr = head;
      } else {
        prev.next = curr.next;
        curr = curr.next;
      } 
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
};
