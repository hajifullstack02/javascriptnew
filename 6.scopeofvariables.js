//Scope  global variable and local variable
// most off cases 'var' is global and 'let' is local variable
var pie = 3.14;     // global variable
console.log(pie);


function studentName(){
    let student1="haji";        //local variables
    let student2="naresh";
    console.log("1st student",student1);
    console.log("2nd student",student2);
}

studentName();

//console.log(student1) // ---  this statement  will give us error which student1 is not defined


console.log(pie)   //this can asscess because global variable