function Giaithua(n){
    this.n=n;
    this.Giaithua=function(){
        if(this.n===0 || this.n===1){return 1;}
        else{
            var result=1;
            for(var i=2;i<=this.n;i++){
                result*=i;
            }
            return result;
        }
    }
}
var n=parseInt(prompt("nhập số nguyên dương n:"));
giaithua=new Giaithua(n);
alert("Giai thừa của n là: "+giaithua.Giaithua()+" ");
