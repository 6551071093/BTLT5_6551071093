function Bank(tiengoc,laisuat,sonam){
    this.tiengoc=tiengoc;
    this.laisuat=laisuat;
    this.sonam=sonam;
// số lần nhập gốc là 1 vì chỉ 1 lần cộng tổng và lãi
    this.banking=function(){
        var result= this.tiengoc * Math.pow((1+this.laisuat),this.sonam);
        return result;
    }
}
var tiengoc=parseInt(prompt("Nhập tiền gốc: "));
var laisuat=parseFloat(prompt("Nhập lãi suất (0.0...): "));
var n=parseInt(prompt("Nhập số năm: "));
bank1=new Bank(tiengoc,laisuat,n);
alert("Tổng số tiền sau "+n+" năm là: "+bank1.banking()+" ");