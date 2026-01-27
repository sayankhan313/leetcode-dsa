let n=5
let toggle=1
for(i=1;i<=n;i++){
let row ="";

for (j=1;j<=i;j++){
    row=row+toggle;
    if(toggle==1){
        toggle=0
    }else{
        toggle=1
    }
}
console.log(row)
}