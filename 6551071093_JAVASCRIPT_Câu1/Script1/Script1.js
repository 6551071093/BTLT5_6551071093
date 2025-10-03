function dientichtamgiac(a,b,c){
var a,b,c;
var p=(a+b+c)/2;
var dientich = Math.sqrt(p*(p-a)*(p-b)*(p-c));
return dientich;
}
var canh1=5;
var canh2=6;
var canh3=7;
var dientich=dientichtamgiac(canh1,canh2,canh3);
alert("Diện tích tam giac có ba cạnh "+ canh1 +","+ canh2 +","+ canh3 +" la: "+ dientich +" ");