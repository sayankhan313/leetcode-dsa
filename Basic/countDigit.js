 function  countDigit(n) {
    let count=0
    if(n==0){
        return count=1
    }
    else{
        //handling negative number i.e converting negative number to posiutive
        n=Math.abs(n)
    while(n>0){
        n=Math.floor(n/10)
        count++

    }

    return count
}
}
const Digit=countDigit(-234)
console.log(Digit);