function checkCashRegister(price, cash, cid) {
  var change = [], balance = cash - price;
  console.log("Initial balance: " + balance);
  let i = cid.length - 1;
  let firstTime = 0;
  let currencyAmount = 0;
  let status = "";

    for(i; i >= 0; i--){

      for(let prop in currency){
        if(prop == "ONEHUNDRED"){
          if("ONE HUNDRED" == cid[i][0]){
            currencyAmount = currency[prop];
            break;
          }
        }
        if(prop == cid[i][0]){
          currencyAmount = currency[prop];
          break;
        }
      }
      //
      if(currencyAmount > balance){
        console.log("Failed: " + currencyAmount);
        continue;
      }
      //console.log("Currency Amount: " + currencyAmount);
      let howManyTimes = Math.floor(balance/currencyAmount);
      console.log("Division against: " + howManyTimes);
      let currencyArr = [cid[i][0], 0];
      for(let r = 0; r < howManyTimes; r++){
        if(cid[i][1] === 0){
          break;
        }
        currencyArr[1] += currencyAmount;
        if(balance < 1){
          currencyAmount = currencyAmount * 100;
          balance = balance * 100;
          cid[i][1] = cid[i][1] * 100;
          balance = Math.round(balance);
          balance = balance - currencyAmount;
          cid[i][1] = Math.round(cid[i][1] - currencyAmount);
          currencyAmount = currencyAmount/100;
          balance = balance/100;
          cid[i][1] = cid[i][1]/100;
          console.log("Cash drawer: " + cid[i][1]);
          if(cid[i][1] < 0){
            cid[i][1] = 0;
            console.log("ZERO");
          }
          //console.log("Balance result: " + balance);
        }else{
        balance = balance - currencyAmount;
        console.log("Balance result: " + balance);
        //balance =Math.round(balance);
        //console.log("Balance result ROUND: " + balance);
        cid[i][1] = cid[i][1] - currencyAmount;
      }
        /*
        if(balance < 0.01 && i === 0){
          balance = 0;
          cid[i][1] = cid[i][1] - 0.01;
          currencyArr[1] += 0.01;
        }*/
      }
      currencyArr[1] = Math.round(currencyArr[1] * 100);
      currencyArr[1] = currencyArr[1] / 100;
      //console.log("First time: " + firstTime);
      //console.log("Balance state: " + balance);
      //balance = Math.floor(balance);
      //console.log("Balance state: ROUND  " + balance);
      change.unshift(currencyArr);
      /*
      if(firstTime === 0 && balance === 0){
        status = "CLOSED";
        break;
      }else{
        status = "OPEN";
      }*/
      for(let i = 0 ; i < change.length; i++){
        if(change[i][1] === (cash - price)){
          status = "CLOSED";
        }else{
          status = "OPENED";
        }
      }
      console.log("balance is: " + balance);
      console.log("Ultimate value of cash drawer: " + cid[i][1]);
      console.log("First time?: " + firstTime);
      firstTime++;
    }//<-for loop
    if(balance > 0){
      status = "INSUFFICIENT_FUNDS";
      change = [];
    }
  //console.log(balance);
  // Here is your change, ma'am.
  console.log("Status " + status + " Change: " + change);
  console.log(' ');
  console.log(cid);
  return {status: status, change: change};
}


var currency = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  ONEHUNDRED: 100
};
/*
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05],
["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90],
["FIVE", 55], ["TEN", 20], ["TWENTY", 60],
["ONE HUNDRED", 100]]);
*/
/*
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25],
 ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
*/

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0],
["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
/*
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0],
["DIME", 0], ["QUARTER", 0], ["ONE", 0],
["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);*/
