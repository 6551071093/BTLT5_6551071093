function User(Name,Age){
    this.Name=Name;
    this.Age=Age;
}
User1=new User("Max","18");
document.write("Name: "+User1.Name+" | Age: "+User1.Age+" <br>");
User1.Surname ="LEE";
document.write("Name: "+User1.Name+" |  Surname: "+User1.Surname+" | Age: "+User1.Age+" <br>");
User1.Age="30";
document.write("Name: "+User1.Name+" |  Surname: "+User1.Surname+" | Age: "+User1.Age+" <br>");