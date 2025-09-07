//functions

function additions(){
  let a= 5;
  let b= 10;
  let add=a+b;
  console.log(add);
}

additions();


//colors use in functions

function redColor(){
    console.log("%c      ","background-color: red");
    console.log("%cjavaScript","background-color: red");
}
redColor();


// function Inside passing an array
function employeeDetails(){
    let emp1=[
        {
        "name" : "haji",
        "age"  : 23,
        "address": "AP"
        }
    ]
     let emp2=[
        {
        "name" : "raja",
        "age"  : 22,
        "address": "KA"
        }
    ]

};
console.log(employeeDetails);