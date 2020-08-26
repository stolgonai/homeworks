// Your JS code is here

// 1. Display the position of the first occurrence of "World" in the variable txt
var txt = "Hello World".split(" "); 
let findPosiition = txt.indexOf("World")
findPosiition
               

// 2. Use the splice() method to remove "Orange" and "Apple" from fruits.

 var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
 fruits.splice(1, 2)
 fruits

              
// 3. Use the concat() method to concatenate girls and boys.
var girls = ["Cecilie", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];

var allTogether = girls.concat(boys)
allTogether
                
// 4. Create an object called "User". Give any 4 properties(key, values) to it.
// Then use methods or loop to get the keys and values of User object.

var user ={
  firstName: "Barsik",
  lastName: "Barsikov",
  age: 1,
  origin: "highlander cat"
}

var keys = Object.keys(user)
var values = Object.values(user)
console.log(keys)
console.log(values)
for(var key in user){
  console.log("key " ,key, " and values ", user[key])
}
