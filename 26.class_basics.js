
// A class which is group of relative members


// constrctuor - its special method which automatically exeuctes while call the class
// mehtod      - function inside of class
// fields      - holds  the data
// properties  - handle the data
//fields   - which can holds the data
//properties -- you handle the data


class Employees1{
    empName ="haji";
    empId   =1002;

    constructor(){
  this.empName ;
    this.empId;
    }

    getEmployee1Details(){
        console.log( `EmployeeName is ${this.empName} and His Id is ${this.empId}`)
    }
}

//without arrguments
let emp1=new Employees1();
emp1.getEmployee1Details();


class Employees{
    empName ;
    empId   ;

    constructor(empName,empId){
        this.empName=empName;
        this.empId=empId;
    }

    getEmployeeDetails(){
        return `EmployeeName is ${this.empName} and His Id is ${this.empId}`
    }
}

//with arrguments
let emp2=new Employees("raj",1003);
console.log(emp2.getEmployeeDetails());

//USING set() and get() inside a class

class Student {
   sname="";

   getStudentName(){
    return this.sname;
   }

  get _name(){
    return this.sname.toUpperCase();
  } 

  set _name(stName){
    if(stName.length >2){
        this.sname= stName;
    }
    else{
       alert(`pleace enter a valid name. which is having above 2 char`)
    }
  }
}

let student =new Student();
student._name="ha";
console.log(student._name);
