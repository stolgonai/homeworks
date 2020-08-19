// Your JS code is here

// // Top Choice
// // Create an array to hold your top choices (colors, presidents, whatever). For each choice, log to the screen a string like: "My #1 choice is blue."

// // Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is. The method slice might be helpful here.

// // Max, Salidat, Tolgonai, Rustam #5 Breakout Room
// // console.log("work#2 -----------------------------")
var myFavCom = ['Apple', 'Microsoft', 'Facebook', 'Amazon', 'Tesla', 'Instagram', 'Google','Apple', 'Microsoft', 'Facebook', 'Amazon','Apple', 'Microsoft'];

function topChoice(array){
  var st = 'st';
  var nd = 'nd';
  var rd = 'rd';
  var th = 'th';

  
  for(var i = 0, orderNum=1; i<array.length; i++,orderNum++){

    if(orderNum%10===1 && orderNum != 11){
      console.log(`My ${orderNum+st} favorite company is: ${myFavCom[i]}`)
      console.log(orderNum+st + " favorite company is:" + myFavCom[i])
    }
    else if(orderNum%10===2 && orderNum != 12){
      console.log(`My ${orderNum+nd} favorite company is: ${myFavCom[i]}`)
    }
    else if(orderNum%10===3 && orderNum != 13){
      console.log(`My ${orderNum+rd} favorite company is: ${myFavCom[i]}`)
    }else{
      console.log(`My ${orderNum+th} favorite company is: ${myFavCom[i]}`)

    }

  }
}

topChoice(myFavCom);