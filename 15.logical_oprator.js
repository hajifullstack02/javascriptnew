// logical oprator 

// &&(and) operater
let age =65;

if(age>= 1 && age <=17){
   console.log("child is minor");
} 
else if(age>=18 && age<=30){
    console.log("person is youth");

}
else if(age>=31 && age<=60){
    console.log("person is middle ageger");
}
else{
    console.log("person is senior citizen");
}

// ||(or) operater
let sdataType="Haji";

if(typeof(sdataType) === "string" || typeof(sdataType) === "number"){
    console.log("logical operater condition is working");
}
else{
    console.log("else statement");
}


if(!(1===2)){
    console.log("Not statement");
}