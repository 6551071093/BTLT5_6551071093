var n=parseInt(prompt("Nhập só nguyên dương n:"));
function isPrimeNumber(x){
    if(x<2){
        return 0;
    }
    for(var i=2;i<=Math.sqrt(x);i++){
        if(x % i ===0){
            return 0;
        }
    }
    return 1;
}
function daySNTBeHonN(n){
    var i=1;
    for(i=1;i<n;i++){
        if(isPrimeNumber(i)===1){
            console.log(i);
        }
        else{
            continue;
        }
    }
}
daySNTBeHonN(n);