function converter(){
    this.bintodec= function(bin){
        return parseInt(bin,2);
    }
}
var bin=prompt("Nhập chuỗi nhị phân:");
conver=new converter();
alert(" "+bin+" converter Decimal "+conver.bintodec(bin)+" ");