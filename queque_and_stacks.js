//build stacks
// google_ udemy, youtube
//youtube
//udemy
//google
// arrays, linkedlists (arrays would be faster, cause they are
// next to each other

//Queues
// Matt -- Joy -- Samir -- Pavel
// 0       1       2        3
// arrays, linkedlists?  Linkedlist because they are more efficient, if we need
// to shift an array o(1)

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.lenght = 0;
    }
    peek() {
        this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.lenght ===0) {
            this.first.next = newNode;

        }
    }
}
