// Your JS code is here
function mixUp(str1, str2){
    var result1 = str1.slice(0,2) + str2.slice(2);
    var result2 = str2.slice(0, 2) + str1.slice(2);
    return result2 + " " + result1
   
   }
   
   mixUp('mix', 'pod') //: 'pox mid'
   mixUp('dog', 'dinner') //: 'dig donner'
   
   
  