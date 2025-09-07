//non primative  are object ,array and function

// array example

let arr1=[10,20,30,40,50];  //only single type variable-data
console.log(arr1);
console.log(arr1[5]);    //undefined 

let arr2=["haji",20,true,3.14];  //mixed  type variables data
console.log(arr2);
console.log(arr2[0]);      //haji
console.log(arr2[2]);      //true

//function
function studentDetails(){
    console.log("name : haji");
    console.log("marks : 95%");
}
studentDetails();

//object
var employee ={
 
      name: "haji",
      age: 23,
      city: "kadapa"
  
};
console.log(employee);