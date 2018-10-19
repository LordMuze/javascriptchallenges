function checkCashRegister(price, cash, cid){
  var balance = (cash - price);
  var newArr = [], change = [], status = "";
  let currencyArray = [], zeroArray = [];
  cid.reverse();
    cid.forEach((x, y) => {
      if(currencyAmount(y) <= balance && x[1] >= currencyAmount(y)){
        if(balance > 0){
        currencyArray = [x[0], 0];
        let howManyTimes = floatingPointDividingCalculator(balance, currencyAmount(y));
  for(let i = 0; i < howManyTimes; i++){
        if(x[1] >= currencyAmount(y)){
        currencyArray[1] += currencyAmount(y) * 100;
        x[1] = floatingPointSubstractCalulator(x[1], currencyAmount(y)); //deducts change from drawer
        balance = floatingPointSubstractCalulator(balance, currencyAmount(y));
      }
  }
  currencyArray[1] = currencyArray[1]/100;
      change.push(currencyArray);
    }
  }
  if(x[1] === 0){
    //if the denomination has zero balance in the cid
    zeroArray.push(x);
  }
    });


    if(zeroArray.length === 9){
      status = "CLOSED";
      zeroArray.reverse();
      change = change.concat(zeroArray);
      change.forEach((x, y)=>  {
        change.find((a, b)=> {
          if(y != b){
            if(a[0] == x[0]){
              if(x[1] > a[1]){
                change.splice(b, 1);
              }else{
                change.splice(y, 1);
              }
            }
          }
        })
      });
    }else{
      status = "OPEN";
    }
    if(balance > 0){
      status = "INSUFFICIENT_FUNDS";
      change = [];
    }
    console.log(status);
    console.log(change);
    console.log({status: status, change: change});
    return {status: status, change: change};
}
function floatingPointSubstractCalulator(subject, denomination){
  subject = subject * 100 - denomination * 100;
  subject = Math.round(subject);
  return subject/100;
}
function floatingPointDividingCalculator(subject1, denomination){
  var i = 0;
  denomination = denomination * 100;
  subject1 = subject1 * 100;
  i = subject1/denomination;
  i = Math.floor(i);
  return i;
}


function currencyAmount(index){
  var currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var currencyReverse = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  return currencyReverse[index];
}/*
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
*/


checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
