function Students(NumberID,Name,Gender){
    this.NumberID=NumberID;
    this.Name=Name;
    this.Gender=Gender;
    this.PrintStats=function(){
    document.write("|ID: "+this.NumberID+" |   Name: "+this.Name+" |   Gender: "+this.Gender+" <br>");
    }
}
Students1= new Students("1 "," Tom "," Male ");
Students2= new Students("2 "," Jessica "," Female ");
Students1.PrintStats();
Students2.PrintStats();