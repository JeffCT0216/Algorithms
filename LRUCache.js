class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev;
    this.next;
  }
}
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.head = new Node(0, 0);
  this.tail = new Node(0, 0);
  this.storage = {};
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.get = function(key) {
  if (key in this.storage) {
    let node = this.storage[key];
    this.remove(node);
    this.add(node);
    return node.val;
  } else {
    return -1;
  }
};

LRUCache.prototype.put = function(key, value) {
  if (key in this.storage) {
    this.remove(this.storage[key]);
  }
  let node = new Node(key, value);
  this.add(node);
  this.storage[key] = node;
  if (this.count > this.capacity) {
    let node = this.head.next;
    this.remove(node);
    delete this.storage[node.key];
  }

};

LRUCache.prototype.add = function (node) {
  let prev = this.tail.prev
  prev.next = node;
  this.tail.prev = node;
  node.prev = prev;
  node.next = this.tail;
  this.count += 1;
};

LRUCache.prototype.remove = function (node) {
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
  this.count -= 1;
};
