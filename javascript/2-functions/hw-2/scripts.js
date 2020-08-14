// Your JS code is here

function compareTwo(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
      return "Error, not a number"
    }
    if (num1 === num2){
      return "Numbers are equal"
    }
     if(num1 > num2){
      return num1
    }else if(num2 > num1){
      return num2
    } 
  }
  console.log("HW#2: _______________________________________________________")
  console.log(compareTwo(3,8))
  console.log(compareTwo(7, 1))
  console.log(compareTwo(1, 1))
  console.log(compareTwo("number", 1))