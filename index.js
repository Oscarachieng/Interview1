
class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
    
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  }

  isEmpty(){
    return  this.root === null
  }

  insertion(val){
    const newNode =  new Node(val)
    if(this.isEmpty()) {
      this.root = newNode;
    }else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(root, newNode){
    // compare , is newNode < root? 
    if(newNode.value < root.value){
      if(root.left === null){
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if(root.right === null){
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
    // if true, check for root.left if exists  class
  }

  search(root, value){
    if(!root){
      return false
    } else {
      if (root.value === value) {
        return true
      } else if (value < root.value){
        return this.search(root.left, value)
      } else {
        return this.search(root.right, value)
      }
    }
  }

  inOrder(root){
    //const values = []
    if(root){
      this.inOrder(root.left)
      console.log(root.value)
      //values.push(root.value)
      this.inOrder(root.right)
    }
     // console.log(values)
    
  }

  smallest(root){
     if(!root.left){
        return root.value
     } else {
        return this.largest(root.left)
     }
  }

  largest(root){
     if(!root.right){
        return root.value
     } else {
        return this.largest(root.right)
     }
  }

  secondLargest(root){
     if(!root && !root.right && !root.left){
         return 'Root node must exist and have a child'
     } else if(!root.right && root.left) {
        return this.largest(root.left)
     } else if( root.right && !root.right.left && 
         !root.right.left) {
      return root.value
     }
     return this.secondLargest(root.right)
  }
}

// SingleTon Implementaion          



const bst = new BinarySearchTree()
console.log(bst.isEmpty())

bst.insertion(10)
bst.insertion(14)
bst.insertion(30)
bst.insertion(20)

console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 14))
console.log(bst.search(bst.root, 30))
console.log(bst.search(bst.root, 50))
//bst.inOrder(bst.root)
console.log(bst.largest(bst.root))
console.log(bst.smallest(bst.root))
console.log(bst.secondLargest(bst.root.right))
        