function areReverse(a, b) {
let first= 0;
let last =b.length-1

while(first<a.length){
   if( a[first]==b[last]){

   
    first++
    last--
}
else{
    return false
}

}
return true
}