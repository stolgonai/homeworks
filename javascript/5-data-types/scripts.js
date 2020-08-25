// Your JS code is here

// Create a function which returns number of even numbers from a given array of numbers
function findEven(arr){
    let result =[];
    for(let i =0; i< arr.length;i++){
      if(arr[i] % 2 === 0){
        result.push(arr[i])
      }
    }
    return result.sort()
  }
  let numbers = [1,3, 7, 4, 9, 0]
  findEven(numbers)
  
  // Create a function to find how many even numbers between given 2 numbers
  function countEvenNums(num1, num2){
    if(num1 === undefined || num2 === undefined){
      return "One of number is undefined"
    }
    let counter = 0
    for(let i = num1; i < num2; i++){
      if((i+1) % 2 === 0){
        counter +=1
      }
    }
  
  
    return counter
  }
  countEvenNums(3,9)
  countEvenNums(3)
  countEvenNums(9, 98)
  
  // Create a function to find the highest value in an array
  function highest(arr){
    if(arr.length === 0){
      return "Empty array"
    } 
    if( arr.length === 1){
      return arr[0]
    }
    let max = arr[0]
    for(let i = 0; i< arr.length; i++){
      if(max < arr[i]){
        max = arr[i]
      }
    }
    return max
  }
  highest([1, 99, 4, 9])
  highest([1, 99, 4, 999])
  highest([])
  highest([9])
  
  // Create a function to find the lowest value in an array
  
  function lowest(arr){
    if(arr.length === 0){
      return "Empty array"
    } 
    if( arr.length === 1){
      return arr[0]
    }
    let min = arr[0]
    for(let i = 0; i< arr.length; i++){
      if(min > arr[i]){
        min = arr[i]
      }
    }
    return min
  }
  lowest([1, 99, 4, 9])
  lowest([1, 99, 4, 0])
  lowest([1, 99, 4, -1])
  lowest([])
  lowest([9])
  
  // Create a function to calculate sum all numbers from a given array
  function sumOfNums(arr){
    if(arr.length === 0){
      return "Empty array"
    } 
    if( arr.length === 1){
      return arr[0]
    }
    var counter = 0
    for(var i = 0; i < arr.length; i++){
      counter +=arr[i]
    }
    return counter
  }
  sumOfNums([1, 2, 4, 9])
  sumOfNums([1, 2, 4, -1])
  sumOfNums([])
  sumOfNums([1])
  
  
  // Create a function to calculate power of a number power(2, 3)
  function power(num1, num2){
     if(num1 === undefined || num2 === undefined){
      return "One of numbers is undefined"
    }
    // if(num2 <=0){
  
    // }
    let result = num1
    for(let i = 1; i < num2; i++){
      // console.log(i)
      result *= num1
    }
    return result
  }
  power(3,2)
  power(3,7)
  power(3)
  
  
  // Create a function to check if all values in an array are same types
  function isSameType(arr){
    // let allSame = true;
  
    if(arr.length === 0 || arr.length === 1){
      return "Empty array or one element only"
    }
    
      // console.log(arr[arr.length-1])
    for(let i = 0; i < arr.length-1; i++){
        // console.log(arr[i], " and ", arr[i+1])
      if(typeof arr[i] !== typeof arr[i+1]){
        return false
      }
    }  
    return true
  }
  
  let arrCollection = [1, 2, 3, "er", 7]
  isSameType(arrCollection)
  
  let arrCollection1 = [1, "er"]
  isSameType(arrCollection1)
  
  let arrCollection2 = []
  isSameType(arrCollection2)
  
  let arrCollection3 = [1]
  isSameType(arrCollection3)
  
  let arrCollection4 = [1, 2, 3, 8, 9]
  isSameType(arrCollection4)
  
  // Create a function to get the greatest common divisor (gcd) of two integers gcd(12, 
  function gcd(num1, num2){
   let init = num1;
   if(num1 > num2){
     init = num2
   }
   for(let i = init; i > 0; i--){
     if(num1 % i === 0 && num2 % i === 0){
       return i
     }
   }
  
  }
  gcd(12,8)
  
  
  
  