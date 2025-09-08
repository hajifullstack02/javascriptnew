// functions with parameters

function multiplications(param1, param2){
    
    console.log(param1*param2);
}

multiplications(25,2);


//arrow functions without params

const welcom=()=> "Hi Welcome";

// welcom();
console.log(welcom());


//arrow fun with params

const squareNumber=( num1,num2)=>{
    let sqNum=num1**num2;
    console.log(sqNum);
}

squareNumber(5,2);