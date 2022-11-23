//Implementing queue operation in javascript
//initializing the stacks as empty array
const stack1 = [];
const stack2 = [];

// enqueue operation

const enqueue = (element) => 
{
  const enqueued = stack1.push(element)
  console.log(stack1)
  console.log(enqueued)
  return enqueued
}
enqueue(3)
enqueue(5)
enqueue(6)
enqueue(43)
console.log(stack1)


//Implemnting the dequeue operation

const dequeue = () => 
  {
   if(stack2.length === 0){
     if(stack1.length === 0){
       console.log('Empty stack cannot be dequeued')
     } else {
       const dequeuedItem = stack1.pop()
       stack2.push(dequeuedItem)
     }
   }
  return stack2.pop()
  }

  console.log(dequeue())
  console.log(dequeue())
  console.log(dequeue())
  console.log(dequeue())