//complex--datatypes


//object
var student={
    sname :"haji",
    DOB   : "mar 08, 2002",
    subjects :["html","css","javaScript"],
    getLocations: function(){
        return "hyderabad"
    }
}

console.log(student.sname);

let birth=student.DOB;

console.log(birth);

//strings
var fullName="haji bahadurshavali";
console.log(fullName.length);

var capsFullName=fullName.toLocaleUpperCase();
console.log(capsFullName);


//arrays opretations

var studentNames=["haji","naresh","raja  ","  naveen"]

let name1=studentNames[0];
console.log(name1);


let name2=studentNames[3];
console.log(name2);
console.log(name2.length)
console.log(name2.trim());
console.log(name2.trim().length)


var fName ="haji";
var lastName="bahadur";

var full_name=fName.concat(lastName);
console.log(full_name);