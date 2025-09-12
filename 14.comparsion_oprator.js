// comparsion opraters
// '==' , '===', "!=" ,"<=",  ">=", ">" , "<"


if(1 == 1){
    console.log(" 1 is equal to 1");
}

if(3 =="3"){                         // here '==' will check only value of the oprents 
    console.log("3 is equal to 3");
}


if(5 === "5"){                      // here '===' will check the value along with the datatype
    console.log("5 is equal to 5");
}else{
    console.log("5 is not equal to '5'");
}

if(3 !=10){
    console.log("condition is true !=");
}

if(15>3){
     console.log("condition is true 15>3");
}

if(7<9){
     console.log("condition is true 7<9");
}
if(8>=8 && 8<= 10){
         console.log("condition is true");

}

// exmaple

let age = 14;
if(age >= 18){
    console.log("eligible for licence");
}else{
        console.log("Not eligible for licence");

}