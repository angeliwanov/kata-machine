type Node<T> = {
    value: T;
    prev: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        if (!this.head.prev) {
            this.head = undefined;
        } else {
            this.head = this.head.prev;
        }

        return head.value;
    }

    peek(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        return this.head.value;
    }
}
