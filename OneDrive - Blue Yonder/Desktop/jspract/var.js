let x = [23, 56, 11 , 72, 45, 88, 37, 90, 64, 29];

let evennumber = [];
let oddnumber = [];

for(let i=0;i<x.length; i++){
  if (x[i] % 2 === 0){
    evennumber.push(x[i])

  }else {
    oddnumber.push(x[i])
  }

  }
console.log(evennumber);
console.log(oddnumber);