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

//######################################################  First Draft   #########################################

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//     }

//     display(){
//         let p = this.head;
//         while(p !== null){
//             console.log(p.data)
//             p = p.next;
//         }
//     }

//    append(data){
//     const first = new Node(data)
//     let p = this.head;
//     if(!p){
//         this.head = first
//         return
//     }
//     while(p.next !== null){
//         p = p.next;
//     }
//     p.next = first
//    }
// }

// const obj = new LinkedList()
// const test = [200,8,9,100]
// for(i=0;i<test.length;i++){
//     obj.append(test[i])
// }
// obj.display()

// const first = new Node(200)
// const second = new Node(8)
// const third = new Node(3)

// first.next = second
// second.next = third

// const obj = new LinkedList()
// obj.head = first;

// obj.display()



class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    append(data){
        const first = new Node(data)
        let p = this.head;
        if(!p){
            this.head = first
            return
        }
        while(p.next !== null){
            p = p.next;
        }
        p.next = first
    }

    countingNode(){
        let p = this.head;
        let res = 0
        while (p !== null){
            res+=1;
            p = p.next;
        }
        return res
    }

    sumOfNodes(){
        let p = this.head;
        let res = 0;
        while( p!== null){
            res += p.data;
            p = p.next;
        }
        return res;
    }
    
    maxNode(){
        let p = this.head;
        let max = p.data
        while(p !== null){
            if(p.data > max)
                max = p.data
            p = p.next;
        }
        return max
    }

    minNode(){
        let p = this.head;
        let min = p.data;
        while(p !== null){
            if (p.data < min)
                min = p.data;
        p=p.next;
        }
        return min
    }



    display(){
        let p = this.head;
        while(p !== null){
            console.log(p.data)
            p = p.next;
        }
    }

    
}
//defined variables

const obj = new LinkedList()

const list = [200,8,3,100,5]
for(i=0;i<list.length;i++){
    obj.append(list[i])
}
obj.display()
console.log(`Elements === ${obj.countingNode()}`)
console.log(`Sum === ${obj.sumOfNodes()}`)
console.log(`Manimum Element === ${obj.minNode()}`)
console.log(`Maximum Element === ${obj.maxNode()}`)


// const a = new Node(200)
// const b = new Node(8)
// const c = new Node(3)
// const d = new Node(100)
// const e = new Node(5)

// //Linking Variables
// a.next = b
// b.next = c
// c.next = d
// d.next = e

// //Calling LL class

// obj.head = a
// obj.display()



