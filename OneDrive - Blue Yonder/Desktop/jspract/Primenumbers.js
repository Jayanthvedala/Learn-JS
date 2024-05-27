primeSort([2, 5, 7445, 78, 13, 9, 20])
function primeSort(arr){
    let primeNumber = [];
    arr.forEach((num)=>{
        let factors = 0;
        for(let i = 0; i <= num; i++){
            if (num%i == 0){
               let value =  factors++
            } 
        }
        if(factors == 2){
            primeNumber.push(num)
        }
    })
console.log(primeNumber)
}

