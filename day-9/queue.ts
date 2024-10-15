interface IQueue {
    enqueue(element: number): void
    dequeue(): number | undefined
    getElement(): number[]
}

class Queue implements IQueue {
    #Container: number[] = []

    enqueue(element: number ): void {
        this.#Container.push(element)
    }
    dequeue(): number | undefined{
        return this.#Container.shift()
    }
    getElement(): number[] {
        return this.#Container
    }
}
const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.getElement());

queue.dequeue()
console.log(queue);

