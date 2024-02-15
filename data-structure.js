// queue data stucture

// queue with Array
// class Queue {
//     constructor(){
//         this.list = [];
//     }

//     peek(){
//         return this.list[0]
//     }

//     enqueue(item){
//         this.list[this.list.length] = item
//     }

//     dequeue(){
//         let item = this.list[0];
//         const newList= []
//         for(let i = 1; i< this.list.length; i++){
//             newList.push(this.list[i])
//         }
//         this.list= [...newList]
//         return item
//     }

//     size(){
//       return  this.list.length
//     }
// }

// const arrQueue = new Queue();
// arrQueue.enqueue(1);
// arrQueue.enqueue(3)
// arrQueue.dequeue();
// console.log(arrQueue.size())


// queue implimentation using object

// class Queue{
//     constructor(){
//         this.list = {};
//         this.count = 0;

//     }

//     enqueue(item){
//         this.list[this.count] = item
//         this.count++
//     }

//     dequeue(){
//         let index = 0
//         let item = this.list[0]
//         delete this.list[0];
//         this.count--;
//         const newObj = {}
//         for (const key in this.list) {
//             newObj[index] = this.list[key];
//             index++
//         }
//         this.list = {...newObj}
//         return item
//     }

//     peek(){
//         return this.list[0];
//     }

//     size(){
//         return Object.keys(this.list).length
//     }
// }

// const objQueue = new Queue();

// objQueue.enqueue(1);
// objQueue.enqueue(23);
// objQueue.enqueue(5);
// objQueue.dequeue()
// objQueue.dequeue()
// console.log(objQueue)


// stack data structure implementation


// stack implemented using Array

// class Stack{
//     constructor(){
//         this.stack = [];
//     }

//     peek(){
//         return this.stack[this.stack.length - 1];
//     }

//     push(item){
//       return  this.stack[this.stack.length ] = item;
//     }

//     pop(){
//        let removed = this.stack[this.stack.length];
//        for(let i = 0; i < this.stack.length - 1; i++){
//         this.stack[i] = this.stack[i];
//        }

//        return removed;
//     }

//     size(){
//         return this.stack.length
//     }
// }

// const arrStack = new Stack();
// arrStack.push('a');
// arrStack.push('b');
// arrStack.pop()
// console.log(arrStack.peek())


// stack implemented using object

// class Stack{
//     constructor(){
//         this.stack = {};
//         this.count = 0;
//     }

//     peek(){
//       return  this.stack[this.count - 1]
//     }

//     push(item){
//         this.stack[this.count] = item;
//         this.count++
//     }

//     pop(){
//         this.count--
//         let removedItem = this.stack[this.count];
//         delete this.stack[this.count]
//         return removedItem
//     }

//     size(){
//         return Object.keys(this.stack).length;
//     }
// }

// const objStack =new Stack();

// objStack.push(2);
// objStack.push(1);
// objStack.push(3)
// objStack.pop()
// objStack.pop()
// console.log(objStack)


// class CustomSet{
//     constructor(){
//         this.set = [];
//     }

//     add(item){
//         if(!this.has(item)){
//             this.set.push(item)
//         }
//     }

//     has(item){
//         if(this.set.includes(item)){
//             return true
//         }else{
//             return false
//         }
//     }

//     delete(item){
//         const index = this.set.findIndex(ele => item === ele)
//         if(index !== -1){
//             let removed = this.set.splice(index,1,0)
//             return removed
//         }else{
//             return 'No Item Found!'
//         }
//     }

//     union(anotherSet){
//         for(let i = 0; i < anotherSet.length; i++){
//             console.log(anotherSet[i])
//             this.add(anotherSet[i])
//         }
//         return this.set
//     }

//     size(){
//         return this.set.length;
//     }

//     isEmpty(){
//         return this.set.length === 0 
//     }
// }

// const set = new CustomSet()
// const set2= new CustomSet();


// set.add('a')
// set.add('c');

// console.log(set.union([1,2,2,1]))