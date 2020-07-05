class BinaryHeap {
  // 默认是二叉树
  static d = 2;

  /**
   * @param {Number} capacity 堆的容量
   * @param {Boolean} minOrMax 大小顶堆 ，默认是大顶堆
   */
  constructor(capacity, minOrMax) {
    this.heap = new Array(capacity).fill(-1);
    this.size = 0;
    this.sign = !minOrMax ? 1 : -1;
  }

  isEmpty () {
    return this.size === 0;
  }

  isFull () {
    return this.size === this.heap.length;
  }

  _parent (i) {
    return (i - 1) / BinaryHeap.d
  }

  _kthChild (i, k) {
    return BinaryHeap.d * i + k;
  }

  /**
   * 添加元素
   * @param {Any} x value 
   */
  add (x) {
    if (this.isFull()) {
      throw new Error("Heap is full, No space to insert new element");
    }
    this.heap[this.size++] = x;
    this._heapifyUp(this.size - 1);
  }

  /**
   * 删除元素
   * @param {Number} x 删除元素的下标 
   */
  delete (x) {
    if (this.isEmpty()) {
      throw new Error("Heap is empty, No element to delete");
    }
    const deleteEle = this.heap[x];
    this.heap[x] = this.heap[this.size - 1];
    this.size--;
    this._heapifyDown(x);
    return deleteEle;
  }


  /**
   * Maintains the heap property while inserting an element.
   * @param {Number} i 
   */
  _heapifyUp (i) {
    const addVal = this.heap[i];
    // 如果比父节点大，就跟父节点交换
    while (i > 0 && this.sign * (addVal - this.heap[this._parent(i)]) > 0) {
      this.heap[i] = this.heap[this._parent(i)];
      i = this._parent(i);
    }
    this.heap[i] = addVal;
  }

  /**
   * Maintains the heap property while deleting an element.
   * @param {Number} i 
   */
  _heapifyDown (i) {
    let child, temp = this.heap[i];
    while (this._kthChild(i, 1) < this.size) {
      // 如果没有子节点中最大的元素大，就交换，否则退出。
      child = this._minOrMaxChild(i);
      if (this.sign * (temp - this.heap[child]) >= 0) break;

      this.heap[i] = this.heap[child];
      i = child;
    }
    this.heap[i] = temp;
  }

  /**
   * 获取子元素的最大值的下标
   * @param {Number} i 
   */
  _minOrMaxChild (i) {
    let leftChild = this._kthChild(i, 1);
    let rightChild = this._kthChild(i, 2);
    return this.sign * (this.heap[leftChild] - this.heap[rightChild]) > 0 ? leftChild : rightChild;
  }

  findTop () {
    if (this.isEmpty()) {
      return new Error('Heap is empty.')
    }
    return this.heap[0];
  }
}

function main () {
  const maxHeap = new BinaryHeap(10, false);
  maxHeap.add(10);
  maxHeap.add(4);
  maxHeap.add(9);
  maxHeap.add(1);
  maxHeap.add(7);
  maxHeap.add(5);
  maxHeap.add(3);
  console.log(JSON.stringify(maxHeap));
  maxHeap.delete(5);
  console.log(JSON.stringify(maxHeap));
  maxHeap.delete(2);
  console.log(JSON.stringify(maxHeap));
}

main();