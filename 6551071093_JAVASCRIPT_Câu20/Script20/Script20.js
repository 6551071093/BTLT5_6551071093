function DATE(now,ngay,gio){
    this.now=now;
    this.ngay=ngay;
    this.gio=gio;
    this.date=function(){
        this.ngay="Ngày: "+ this.now.getDate();
        this.ngay+="/"+ (this.now.getMonth()+1);
        this.ngay+="/"+ this.now.getFullYear();
        this.gio=" Giờ: "+ this.now.getHours();
        this.gio+=":"+ this.now.getMinutes();
        this.gio+=":"+ this.now.getSeconds();
        return this.ngay + this.gio;
    }
}
var now=new DATE(new Date());
alert(now.date());