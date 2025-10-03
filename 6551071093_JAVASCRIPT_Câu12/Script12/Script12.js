var b=parseInt(prompt("Nhập số nguyên dương(cơ số):"));
var n=parseInt(prompt("Nhập số nguyên dương(số mũ):"));
function hamMu(b,n){
    if(b===1){return 1;}
    else if(n===1){return b;}
    else{
        var kq=Math.pow(b,n);
        return kq;
    }
}
var kq=hamMu(b,n);
alert(""+b+"^"+n+" co ket qua la: "+kq+"");
