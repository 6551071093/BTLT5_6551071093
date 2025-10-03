function HinhTru(radius,height){
    this.radius=radius;
    this.height=height;
}
HinhTru1=new HinhTru(10,15);
document.write("Thể tích của hình trụ (10,15): "+eval(HinhTru1.radius*HinhTru1.radius*Math.PI*HinhTru1.height)+" <br>");
HinhTru1.height="30";
document.write("Diện tích toàn phần của hình trụ (10,30): "+eval(2*HinhTru1.radius*HinhTru1.radius*Math.PI + 2*Math.PI*HinhTru1.radius*HinhTru1.height)+" <br>");