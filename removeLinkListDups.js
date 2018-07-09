let removeLinkedListDuplciates = (head) => {
  let set = new Set();
  let pointer = head;
  set.add(pointer.data);
  while (pointer.next !== null) {
    if (set.has(pointer.next.data)) {
      pointer = pointer.next.next;
    } else {
      set.add(pointer.next.data);
      pointer = pointer.next;   
    } 
  }
  return head;
}
