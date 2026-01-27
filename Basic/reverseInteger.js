
var reverse = function(x) {
    let xCopy=x
    let rev=0;
    x=Math.abs(x)
    while(x>0){
    
        rem=x%10
        rev=(10*rev)+rem
        x=Math.floor(x/10)

    }
    
    return (xCopy<0)?-rev:rev
};