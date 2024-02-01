// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // Insert a node at the end of the list
//     append(data) {
//         const newNode = new Node(data);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next !== null) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     // Print the elements of the list
//     print() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// // Usage:
// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.print(); // Output: 1, 2, 3



