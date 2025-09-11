// prototype is keyword which helps us to create custom methods to functions( to share the method to function )
// in other words 

//prototype demo
var  duplicateCollegeName="";
var  duplicateCollegeLoc="";
function college(collegeName,location) {
    console.log(this);
    duplicateCollegeName = collegeName;
    duplicateCollegeLoc= location;
}

college("SVCE","Tirupati");
console.log("College Name : " , duplicateCollegeName+ " , "+ "College Location : ", duplicateCollegeLoc);   //"SVCE"



// //prototype implimentation


function Person(name) {
  this.name = name;
}

// Adding method to prototype
Person.prototype.sayHi = function () {
  console.log("Hi, I am " + this.name);
};


let p1 = new Person("Haji");
let p2 = new Person("Ali");

p1.sayHi(); // Hi, I am Haji
p2.sayHi(); // Hi, I am Ali
