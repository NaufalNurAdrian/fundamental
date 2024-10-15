class Node {
  element: number;
  next: any;

  constructor(element: number) {
    this.element = element;
    this.next = null;
  }
}

class linkedList {
  head: object | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element: number) {
    let node = new Node(element);

    let current: any;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size += 1;
  }
  printlist() {
    let curr: any = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }
}
const linked = new linkedList();
const linked2 = new linkedList();

linked.add(1);
linked.add(2);
linked.add(3);
linked.add(4);
console.log(linked);

linked.printlist();

const arr: number[] = [1, 2, 3, 4, 5];

