// Your JS code is here

var fahrenheit = Math.floor((Math.random() * 100));
var convertFaToCe = ((fahrenheit - 32)*5/9).toFixed(1);
var faToCeResult =  "It is " + fahrenheit + "\u2109  today. That\'s " + convertFaToCe + "\u2103";
console.log("Last HW#3 convert to Ce result: ", faToCeResult)