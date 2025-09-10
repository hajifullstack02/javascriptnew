//globel context


var  course =["java","python","php",".net"];

this.students="naveen";

console.log(this);   //return the window


//object level this

var obj={
sname :"haji",
education :"b.tech",

getProfession : function(){
  console.log(this);        // this will return object of the members
}
}

obj.getProfession();


// function level this

function getEmployees(){

    this.empName="suresh";
    this.age= 25;
    console.log(this);
    console.log(this.empName);
}

new getEmployees();


// inside a arrow function
var obj={
sname :"haji",
education :"b.tech",

getProfession : () =>{
  console.log(this);        // this will return object of the members
}
}

obj.getProfession();


