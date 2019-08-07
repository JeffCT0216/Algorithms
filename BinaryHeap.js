class BinaryHeap{
  constructor(arr) {
    this.heap = arr;
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  
  bubbleUp(index = this.heap.length - 1) {
    if (index === 0) return;
    let parentInd = Math.floor((index - 1) / 2);
    let parent = this.heap[parentInd];
    let curr = this.heap[index];
    if (curr > parent) {
      [this.heap[parentInd], this.heap[index]] =
      [this.heap[index], this.heap[parentInd]];
      console.log(this.heap);
      this.bubbleUp(parentInd);
    }
  }

  extractMax() {
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
  }

  sinkDown(ind) {
    let left = ind * 2 + 1;
    let right = ind * 2 + 2;
    let largest = ind;
    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== ind) {
      [this.heap[largest], this.heap[ind]] = 
      [this.heap[ind], this.heap[largest]];
      this.sinkDown(largest);
    }
  }
}

let heap = new BinaryHeap([30, 20, 10, 7, 9, 5]);
heap.extractMax();
console.log(heap.heap);
