const reverseLinkedList = (head) => {
  if (!head || !head.next) {
    return head;
  }
  let reverseHead = head;
  let currentHead = head.next;
  reverseHead.next = null;
  while (currentHead) {
    let temp = currentHead;
    currentHead = temp.next;
    temp.next = reverseHead;
    reverseHead = temp;
  }
  return reverseHead;
}

const reverseLLRecursive = (head) => {
  if (!head || !head.next) {
    return head;
  }
  let reverseHead = reverseLLRecursive(head.next);
  head.next.next = reverseHead;
  head.next = null;
  return reverseHead;
}
