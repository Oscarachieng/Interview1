
// arrange the array in ascending order
// calculate the products of the last three elements
// return the maximun products

const maximumProducts = (array, threshold) => {
  const n = array.length
  
  if(n < threshold){
    return 'Array must hav atleast three elemnts'
  } else {
    array.sort()
    console.log(array.sort((a,b) => a-b))
    const maxProduct = array[n-1] * array[n-2] * array[n-3]
    const minProduct = array[0] * array[1] * array[2]
    console.log(maxProduct,minProduct)
    return Math.max(maxProduct,minProduct)
  }
} 

const myList  = [ 20, 1, 23, 45, 70, 6, -2, 200 ]
const b = 3
console.log(maximumProducts(myList, b))

const points = [40, 100, 1, 5, 25, 1]
points.sort((a,b) => a-b)
console.log(points)
console.log(points.pop())