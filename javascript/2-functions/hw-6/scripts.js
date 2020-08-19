// Your JS code is here
function fixStart(str) {
    let firstCh = str[0];
    var result = firstCh;
    for(let i = 1; i < str.length; i++){
       if(str[i] === firstCh){
       result += "*";
       continue;
      }
      result += str[i];
    }
      return result
  
  }
  fixStart('babble') //: 'ba**le'
  fixStart('turtle') //: 'tur*le'