function truthCheck(collection, pre) {
  // Is everyone being true?
  let boolState = false;
  for(let i = 0; i < collection.length; i++){
    if(collection[i].hasOwnProperty(pre)){
      console.log(collection[i][pre]);
      boolState = Boolean(collection[i][pre]);
      if(!boolState){
        break;
      }
    }else{
      boolState = false;
      break;
    }
  }
  console.log(boolState);
  return boolState;
}
/*
truthCheck([{"user": "Tinky-Winky", "sex": "male"},
 {"user": "Dipsy", "sex": "male"},
 {"user": "Laa-Laa", "sex": "female"},
 {"user": "Po", "sex": "female"}],
 "sex");
*/

 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
 /*
 iterate
 if x hasOwnProperty()
 yes:

 else return false
 */
