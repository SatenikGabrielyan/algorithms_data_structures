class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(arr = []) {
        this.head = null
        if (Array.isArray(arr)) {
            for (let i = arr.length - 1; i >= 0; i--) {
                this.insert(arr[i])
            }
        }
    }

    insert(data) {
        let node = new Node(data)
        node.next = this.head
        this.head = node
    }
}

function addTwoNumbers(l1, l2) {
    let newNode = new Node(0)
    let currentNode = newNode
    let remainder = 0
    let temp1 = l1.head
    let temp2 = l2.head

    while (temp1 !== null || temp2 !== null || remainder !== 0) {
        let val1 = 0
        let val2 = 0

        if (temp1 !== null) {
            val1 = temp1.data
            temp1 = temp1.next
        }
        if (temp2 !== null) {
            val2 = temp2.data
            temp2 = temp2.next
        }

        let sum = val1 + val2 + remainder
        remainder = Math.floor(sum / 10)
        currentNode.next = new Node(sum % 10);
        currentNode = currentNode.next
    }

    return newNode.next
}

function printLinkedList(head) {
    let result = []
    while (head !== null) {
        result.push(head.data)
        head = head.next
    }
    return result
}

let l1 = new LinkedList([9, 9, 9, 9, 9, 9, 9])
let l2 = new LinkedList([9, 9, 9, 9])

let result = addTwoNumbers(l1, l2)
console.log(printLinkedList(result))
