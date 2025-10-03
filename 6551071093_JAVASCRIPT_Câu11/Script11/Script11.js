var n=parseInt(prompt("Nhập số nguyên n:"));
function countDigit(n){
    var count=0,digit;
    if(n===0){return 1;}
    while(n != 0){
        n=Math.floor(n / 10);
        count++;
    }
    return count;
}
function reverse(n){
    var rev=0,digit,temp=n;
    var count=countDigit(n);
    if(temp===0){return 0;}
    else if(temp>0){
        while(temp>0){
            digit=temp%10;
//cho số cuối thành số đầu cho tới khi temp hết chữ số
            rev=rev+digit * Math.pow(10,count-1);
            temp=Math.floor(temp / 10);
            count--;
        }
        return rev;
    }
    else{alert("so n khong hop le!");}
}
var rev=reverse(n);
alert("so n duoc in nguoc la: "+rev+"");